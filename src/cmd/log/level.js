const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (level, options) => {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    qs.set('arg', level)
    if (options.subsystem) qs.set('subsystem', options.subsystem)

    const url = `${toUri(config.apiAddr)}/api/log/level?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
