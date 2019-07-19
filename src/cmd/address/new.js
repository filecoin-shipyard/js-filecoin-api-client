const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/address/new`
    const res = await ok(fetch(url, { signal: options.signal }))
    const { Address } = await res.json()
    return Address
  }
}
