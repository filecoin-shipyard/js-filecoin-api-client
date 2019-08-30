const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (cid, options) => {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/client/query-storage-deal?arg=${encodeURIComponent(cid)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    const storageDeal = toCamel(await res.json())

    if (storageDeal.proposalCid) {
      storageDeal.proposalCid = storageDeal.proposalCid['/']
    }

    if (storageDeal.proofInfo) {
      storageDeal.proofInfo = toCamel(storageDeal.proofInfo)
    }

    if (storageDeal.proofInfo && storageDeal.proofInfo.commitmentMessage) {
      storageDeal.proofInfo.commitmentMessage = storageDeal.proofInfo.commitmentMessage['/']
    }

    return storageDeal
  }
}
