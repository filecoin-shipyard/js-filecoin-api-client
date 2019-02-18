const toUri = require('multiaddr-to-uri')
const Multiaddr = require('multiaddr')
const QueryString = require('querystring')
const { ok } = require('../../lib/fetch')

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
      const peerInfo = { addr: Multiaddr(p.Addr).encapsulate(`/ipfs/${p.Peer}`) }

      if (options.verbose || options.streams) {
        peerInfo.streams = (p.Streams || []).map(s => ({ protocol: s.Protocol }))
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
