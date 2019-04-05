const toUri = require('multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (cid, options) => {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/dag/get?arg=${encodeURIComponent(cid)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    return res.headers.get('Content-Type') === 'application/json'
      ? res.json()
      : res.blob()
  }
}
