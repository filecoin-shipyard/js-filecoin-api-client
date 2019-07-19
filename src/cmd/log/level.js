const toUri = require('../../lib/multiaddr-to-uri')
const QueryString = require('querystring')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (level, options) => {
    options = options || {}

    const qs = { arg: level }

    if (options.subsystem) {
      qs.subsystem = options.subsystem
    }

    const url = `${toUri(config.apiAddr)}/api/log/level?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
