const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (cid, options) => {
    options = options || {}
    cid = encodeURIComponent(cid)

    const url = `${toUri(config.apiAddr)}/api/client/payments?arg=${cid}`
    const res = await ok(fetch(url, { signal: options.signal }))

    const paymentsData = await res.json()

    return (paymentsData || []).map(d => {
      const { valid_at: validAt, ...rest } = d
      if (validAt != null) {
        rest.validAt = validAt
      }
      return rest
    })
  }
}
