const ndjson = require('iterable-ndjson')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return (key, options) => (async function * () {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    qs.set('arg', key.toString())
    if (options.numProviders) qs.set('num-providers', options.numProviders)

    const url = `${toUri(config.apiAddr)}/api/dht/findprovs?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const peer of ndjson(toIterable(res.body))) {
      const prov = {
        type: peer.Type,
        responses: (peer.Responses || []).map(r => ({
          id: r.ID,
          addrs: r.Addrs || []
        }))
      }

      if (peer.ID) {
        prov.id = peer.ID
      }

      if (peer.Extra) {
        prov.extra = peer.Extra
      }

      yield prov
    }
  })()
}
