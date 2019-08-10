const toUri = require('../lib/multiaddr-to-uri')
const ndjson = require('iterable-ndjson')
const { ok, toIterable } = require('../lib/fetch')
const toCamel = require('../lib/to-camel')

module.exports = (fetch, config) => {
  return (peerId, options) => (async function * () {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    qs.set('arg', peerId.toString())

    if (options.count != null) {
      qs.set('count', options.count)
    }

    const url = `${toUri(config.apiAddr)}/api/ping?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const pong of ndjson(toIterable(res.body))) {
      yield toCamel(pong)
    }
  })()
}
