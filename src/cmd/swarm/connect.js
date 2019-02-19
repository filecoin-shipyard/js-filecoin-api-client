const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const QueryString = require('querystring')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (addrs, options) => {
    addrs = Array.isArray(addrs) ? addrs : [addrs]
    options = options || {}

    const qs = { arg: addrs.map(a => a.toString()) }

    const url = `${toUri(config.apiAddr)}/api/swarm/connect?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()

    return (data || []).map(({ Peer, Success }) => ({
      peer: new CID(Peer),
      success: Success
    }))
  }
}
