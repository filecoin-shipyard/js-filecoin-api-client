const toUri = require('../lib/multiaddr-to-uri')
const { ok } = require('../lib/fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/id`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return { id: data.ID, addresses: data.Addresses || [] }
  }
}
