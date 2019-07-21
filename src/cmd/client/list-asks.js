const ndjson = require('iterable-ndjson')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return options => (async function * () {
    options = options || {}

    const url = toUri(config.apiAddr) + '/api/client/list-asks'
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const ask of ndjson(toIterable(res.body))) {
      yield toCamel(ask)
    }
  })()
}
