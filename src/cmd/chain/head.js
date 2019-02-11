const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/chain/head`
    const res = await ok(fetch(url, { signal: options.signal }))
    const heads = await res.json()
    return heads.map(h => new CID(h['/']))
  }
}
