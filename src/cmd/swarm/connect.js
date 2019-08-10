const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (addrs, options) => {
    addrs = Array.isArray(addrs) ? addrs : [addrs]
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    addrs.forEach(a => qs.append('arg', a.toString()))

    const url = `${toUri(config.apiAddr)}/api/swarm/connect?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()

    return (data || []).map(toCamel)
  }
}
