const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const { ok } = require('../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/id`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return { id: new CID(data.ID), addresses: data.Addresses }
  }
}
