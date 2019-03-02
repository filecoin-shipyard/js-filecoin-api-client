const toUri = require('multiaddr-to-uri')
const { ok } = require('../../../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/wallet/addrs/new`
    const res = await ok(fetch(url, { signal: options.signal }))
    const { Address } = await res.json()
    return Address
  }
}
