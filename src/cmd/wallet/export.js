const toUri = require('multiaddr-to-uri')
const QueryString = require('querystring')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (minerAddr, options) => {
    options = options || {}
    const qs = { arg: minerAddr }
    const url = `${toUri(config.apiAddr)}/api/wallet/export?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return { keyInfo: data.KeyInfo }
  }
}
