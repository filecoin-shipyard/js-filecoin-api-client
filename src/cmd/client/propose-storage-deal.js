const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (miner, cid, askId, time, options) => {
    options = options || {}

    miner = encodeURIComponent(miner)
    cid = encodeURIComponent(cid)
    askId = encodeURIComponent(askId)
    time = encodeURIComponent(time)

    const duplicatesParam = options.allowDuplicates ? `&allow-duplicates=${encodeURIComponent(options.allowDuplicates)}` : ""

    const url = `${toUri(config.apiAddr)}/api/client/proposeStorageDeal?arg=${miner}&arg=${cid}&arg${askId}&arg${time}${duplicatesParam}`
    const res = await ok(fetch(url, { signal: options.signal }))

    const newDeal = await res.json()
    return newDeal
  }
}
