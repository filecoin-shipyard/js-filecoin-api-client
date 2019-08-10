const toUri = require('../../lib/multiaddr-to-uri')
const explain = require('explain-error')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (key, value, options) => {
    options = options || {}

    try {
      value = JSON.stringify(value)
    } catch (err) {
      throw explain(err, 'failed to stringify config value')
    }

    const qs = new URLSearchParams(options.qs)
    ;[key, value].forEach(arg => qs.append('arg', arg))

    const url = `${toUri(config.apiAddr)}/api/config?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return data
  }
}
