const toUri = require('multiaddr-to-uri')
const { ok } = require('../fetch')

module.exports = (fetch, config) => {
  return async (minerAddr, options) => {
    options = options || {}
    minerAddr = encodeURIComponent(minerAddr)
    const url = `${toUri(config.apiAddr)}/api/address/lookup?arg=${minerAddr}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
