const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')
const FormData = require('form-data')

module.exports = (fetch, config) => {
  return async (keyInfo, options) => {
    keyInfo = Array.isArray(keyInfo) ? keyInfo : [keyInfo]
    options = options || {}

    const form = new FormData()
    form.append('walletFile', JSON.stringify({ KeyInfo: keyInfo }))

    const url = `${toUri(config.apiAddr)}/api/wallet/import`
    const res = await ok(fetch(url, {
      signal: options.signal,
      method: 'POST',
      body: form
    }))

    return toCamel(await res.json())
  }
}
