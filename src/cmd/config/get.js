const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (key, options) => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/config?arg=${encodeURIComponent(key)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return data
  }
}
