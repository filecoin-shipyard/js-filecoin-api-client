const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (minerAddr, options) => {
    options = options || {}
    minerAddr = encodeURIComponent(minerAddr)
    const url = `${toUri(config.apiAddr)}/api/wallet/balance?arg=${minerAddr}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
