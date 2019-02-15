const toUri = require('multiaddr-to-uri')
const Multiaddr = require('multiaddr')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/bootstrap/ls`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return data.Peers.map(addr => Multiaddr(addr))
  }
}
