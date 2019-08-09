const QueryString = require('querystring')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (messageCid, options) => {
    options = options || {}

    const qs = { arg: messageCid.toString() }
    if (options.message != null) qs.message = options.message
    if (options.receipt != null) qs.receipt = options.receipt
    if (options.return != null) qs.return = options.return
    if (options.timeout) qs.timeout = options.timeout

    const url = `${toUri(config.apiAddr)}/api/message/wait?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    return toCamel(await res.json())
  }
}
