const toUri = require('multiaddr-to-uri')
const { ok } = require('../../../lib/fetch')

module.exports = (fetch, config) => {
  return async (walletAddr, options) => {
    options = options || {}
    walletAddr = encodeURIComponent(walletAddr)
    const url = `${toUri(config.apiAddr)}/api/wallet/addrs/lookup?arg=${walletAddr}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
