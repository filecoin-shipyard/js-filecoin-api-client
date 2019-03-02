const toUri = require('multiaddr-to-uri')
const QueryString = require('querystring')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async ({ pledge, collateral, price, limit }, options) => {
    options = options || {}

    const qs = { arg: [pledge, collateral], price, limit }

    if (options.from != null) {
      qs.from = options.from
    }

    if (options.peerId != null) {
      qs.peerid = options.peerId
    }

    if (options.preview != null) {
      qs.preview = options.preview
    }

    const url = `${toUri(config.apiAddr)}/api/miner/create?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return data
  }
}
