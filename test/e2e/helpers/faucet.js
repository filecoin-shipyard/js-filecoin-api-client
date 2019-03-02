const toUri = require('multiaddr-to-uri')
const fetch = require('node-fetch')
const FormData = require('form-data')
const CID = require('cids')

const TAP_ADDR = '/dns4/user.kittyhawk.wtf/tcp/9797/http'

module.exports = async (walletAddr, options) => {
  options = options || {}

  const body = new FormData()
  body.append('target', walletAddr)

  const res = await fetch(`${toUri(options.tapAddr || TAP_ADDR)}/tap`, {
    method: 'POST',
    body,
    signal: options.signal
  })

  if (!res.ok) {
    throw new Error(`Unexpected status: ${res.status}`)
  }

  const text = await res.text()

  if (!text.includes('Success! Message CID: ')) {
    throw new Error('Unexpected response: ' + text)
  }

  return new CID(text.trim().replace('Success! Message CID: ', ''))
}
