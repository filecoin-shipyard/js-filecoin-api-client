const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const explain = require('explain-error')
const { ok, toIterable } = require('../../lib/fetch')
const ndjson = require('iterable-ndjson')

module.exports = (fetch, config) => {
  return options => (async function * () {
    options = options || {}

    const url = toUri(config.apiAddr) + '/api/client/list-asks'
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const { Miner, Price, Expiry, ID, Error } of ndjson(toIterable(res.body))) {
      yield Error
        ? { error: Error }
        : { miner: Miner, price: Price, expiry: Expiry, id: ID }
    }
  })()
}
