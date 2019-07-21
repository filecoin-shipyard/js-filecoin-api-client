const QueryString = require('querystring')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (minerAddr, options) => {
    options = options || {}
    const qs = { arg: minerAddr }
    const url = `${toUri(config.apiAddr)}/api/wallet/export?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return toCamel(await res.json())
  }
}
