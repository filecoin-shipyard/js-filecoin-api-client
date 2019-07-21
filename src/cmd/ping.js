const toUri = require('../lib/multiaddr-to-uri')
const ndjson = require('iterable-ndjson')
const QueryString = require('querystring')
const { ok, toIterable } = require('../lib/fetch')
const toCamel = require('../lib/to-camel')

module.exports = (fetch, config) => {
  return (peerId, options) => (async function * () {
    options = options || {}

    const qs = { arg: peerId }

    if (options.count != null) {
      qs.count = options.count
    }

    const url = `${toUri(config.apiAddr)}/api/ping?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const pong of ndjson(toIterable(res.body))) {
      yield toCamel(pong)
    }
  })()
}
