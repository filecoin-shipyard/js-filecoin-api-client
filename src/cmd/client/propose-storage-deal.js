const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (miner, cid, askId, time, options) => {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    ;[miner, cid.toString(), askId, time].forEach(arg => qs.append('arg', arg))
    if (options.allowDuplicates != null) qs.set('allow-duplicates', options.allowDuplicates)

    const url = `${toUri(config.apiAddr)}/api/client/propose-storage-deal?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))

    const newDeal = toCamel(await res.json())

    if (newDeal.proposalCid) {
      newDeal.proposalCid = newDeal.proposalCid['/']
    }

    newDeal.proofInfo = toCamel(newDeal.proofInfo)

    return newDeal
  }
}
