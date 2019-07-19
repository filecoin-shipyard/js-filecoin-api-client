const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (cid, options) => {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/dag/get?arg=${encodeURIComponent(cid)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    if (res.headers.get('Content-Type') === 'application/json') {
      return res.json()
    }

    // Buffer for Node.js, blob otherwise
    return res.buffer ? res.buffer() : res.blob()
  }
}
