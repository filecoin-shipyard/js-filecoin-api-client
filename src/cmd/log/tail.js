const toUri = require('multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')
const ndjson = require('iterable-ndjson')

module.exports = (fetch, config) => {
  return () => ({
    [Symbol.asyncIterator] (options) {
      return (async function * () {
        options = options || {}

        const url = `${toUri(config.apiAddr)}/api/log/tail`
        const res = await ok(fetch(url, { signal: options.signal }))

        for await (const entry of ndjson(toIterable(res.body))) {
          yield entry
        }
      })()
    }
  })
}
