const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/stats/bandwidth`
    const res = await ok(fetch(url, { signal: options.signal }))
    return toCamel(await res.json())
  }
}
