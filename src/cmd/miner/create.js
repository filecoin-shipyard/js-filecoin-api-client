const QueryString = require('querystring')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (collateral, options) => {
    options = options || {}

    const qs = { arg: collateral }

    if (options.from != null) {
      qs.from = options.from
    }

    if (options.gasLimit != null) {
      qs['gas-limit'] = options.gasLimit
    }

    if (options.gasPrice != null) {
      qs['gas-price'] = options.gasPrice
    }

    if (options.peerId != null) {
      qs.peerid = options.peerId
    }

    if (options.preview != null) {
      qs.preview = options.preview
    }

    if (options.sectorSize != null) {
      qs.sectorsize = options.sectorSize
    }

    const url = `${toUri(config.apiAddr)}/api/miner/create?${QueryString.stringify(qs)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
