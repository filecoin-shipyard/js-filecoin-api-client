const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')
const QueryString = require('querystring')

module.exports = (fetch, config) => {
  return async (miner, cid, askId, time, options) => {
    options = options || {}

    const qs = { arg: [miner, cid, askId, time] }
    if (options.allowDuplicates != null) qs['allow-duplicates'] = options.allowDuplicates

    const url = `${toUri(config.apiAddr)}/api/client/propose-storage-deal?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    const newDeal = toCamel(await res.json())

    if (newDeal.proposalCid) {
      newDeal.proposalCid = newDeal.proposalCid['/']
    }

    newDeal.proofInfo = toCamel(newDeal.proofInfo)

    return newDeal
  }
}
