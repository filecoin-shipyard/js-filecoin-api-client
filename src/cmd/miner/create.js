const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (collateral, options) => {
    options = options || {}

    const qs = new URLSearchParams(options.qs)
    qs.set('arg', collateral)

    if (options.from != null) {
      qs.set('from', options.from)
    }

    if (options.gasLimit != null) {
      qs.set('gas-limit', options.gasLimit)
    }

    if (options.gasPrice != null) {
      qs.set('gas-price', options.gasPrice)
    }

    if (options.peerId != null) {
      qs.set('peerid', options.peerId)
    }

    if (options.preview != null) {
      qs.set('preview', options.preview)
    }

    if (options.sectorSize != null) {
      qs.set('sectorsize', options.sectorSize)
    }

    const url = `${toUri(config.apiAddr)}/api/miner/create?${qs}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return res.json()
  }
}
