const toUri = require('multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/stats/bandwidth`
    const res = await ok(fetch(url, { signal: options.signal }))
    const { TotalIn, TotalOut, RateIn, RateOut } = await res.json()
    return { totalIn: TotalIn, totalOut: TotalOut, rateIn: RateIn, rateOut: RateOut }
  }
}
