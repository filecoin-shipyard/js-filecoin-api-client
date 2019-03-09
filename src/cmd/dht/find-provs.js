const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const Multiaddr = require('multiaddr')
const { ok, toIterable } = require('../../lib/fetch')
const ndjson = require('iterable-ndjson')
const QueryString = require('querystring')

module.exports = (fetch, config) => {
  return (key, options) => (async function * () {
    options = options || {}

    const qs = { arg: key.toString() }

    if (options.numProviders) {
      qs['num-providers'] = options.numProviders
    }

    const url = `${toUri(config.apiAddr)}/api/dht/findprovs?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const peer of ndjson(toIterable(res.body))) {
      const prov = {
        type: peer.Type,
        responses: (peer.Responses || []).map(r => ({
          id: new CID(r.ID),
          addrs: (r.Addrs || []).map(a => Multiaddr(a))
        }))
      }

      if (peer.ID) {
        prov.id = new CID(peer.ID)
      }

      if (peer.Extra) {
        prov.extra = peer.Extra
      }

      yield prov
    }
  })()
}
