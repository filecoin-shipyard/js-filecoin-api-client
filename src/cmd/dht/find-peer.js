const ndjson = require('iterable-ndjson')
const QueryString = require('querystring')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return (peerId, options) => (async function * () {
    options = options || {}

    const qs = { arg: peerId }

    const url = `${toUri(config.apiAddr)}/api/dht/findpeer?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const addr of ndjson(toIterable(res.body))) {
      yield addr
    }
  })()
}
