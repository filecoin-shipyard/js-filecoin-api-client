const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (minerAddr, options) => {
    minerAddr = Array.isArray(minerAddr) ? minerAddr : [minerAddr]
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    minerAddr.forEach(a => qs.append('arg', a))

    const url = `${toUri(config.apiAddr)}/api/wallet/export?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))

    return toCamel(await res.json())
  }
}
