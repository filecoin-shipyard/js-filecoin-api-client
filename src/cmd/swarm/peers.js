const QueryString = require('querystring')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}

    const qs = {}

    if (options.verbose) {
      qs.verbose = true
    } else {
      if (options.streams) {
        qs.streams = true
      }
      if (options.latency) {
        qs.latency = true
      }
    }

    const url = `${toUri(config.apiAddr)}/api/swarm/peers?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()

    return (data.Peers || []).map(p => {
      const peerInfo = { addr: p.Addr, peer: p.Peer }

      if (options.verbose || options.streams) {
        peerInfo.streams = (p.Streams || []).map(toCamel)
      }

      if (options.verbose || options.latency) {
        peerInfo.latency = p.Latency
      }

      if (options.verbose) {
        peerInfo.muxer = p.Muxer
      }

      return peerInfo
    })
  }
}
