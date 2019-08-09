const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')
const QueryString = require('querystring')

module.exports = (fetch, config) => {
  return async (miner, cid, askId, time, options) => {
    options = options || {}
    const args = { arg: [miner, cid, askId, time] }
    const allowDuplicates = options.allowDuplicates ? { "allow-duplicates": options.allowDuplicates } : {}

    const qs = Object.assign(args, allowDuplicates)

    const url = `${toUri(config.apiAddr)}/api/client/proposeStorageDeal?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    const newDeal = await res.json()
    return toCamel(newDeal)
  }
}
