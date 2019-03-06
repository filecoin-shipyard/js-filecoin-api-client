const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const { ok } = require('../../lib/fetch')
const { toFormData } = require('../../lib/form-data')

module.exports = (fetch, config) => {
  return async (input, options) => {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/client/import`
    const res = await ok(fetch(url, {
      method: 'POST',
      signal: options.signal,
      body: await toFormData(input)
    }))

    const data = await res.json()
    return new CID(data['/'])
  }
}
