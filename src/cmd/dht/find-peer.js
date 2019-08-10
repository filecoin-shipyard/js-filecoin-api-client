const ndjson = require('iterable-ndjson')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return (peerId, options) => (async function * () {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    qs.set('arg', peerId.toString())

    const url = `${toUri(config.apiAddr)}/api/dht/findpeer?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const addr of ndjson(toIterable(res.body))) {
      yield addr
    }
  })()
}
