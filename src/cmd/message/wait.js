const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (messageCid, options) => {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    qs.set('arg', messageCid.toString())
    if (options.message != null) qs.set('message', options.message)
    if (options.receipt != null) qs.set('receipt', options.receipt)
    if (options.return != null) qs.set('return', options.return)
    if (options.timeout) qs.set('timeout', options.timeout)

    const url = `${toUri(config.apiAddr)}/api/message/wait?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))

    return toCamel(await res.json())
  }
}
