/* eslint-env browser */

const toUri = require('multiaddr-to-uri')
const toStream = require('async-iterator-to-stream')
const FormData = require('form-data')
const CID = require('cids')
const { ok } = require('../../lib/fetch')
const { isBrowser, isNode } = require('../../lib/env')

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

async function toFormData (input) {
  // If not an async iterator, this must conform to whatever FormData allows
  if (!input[Symbol.asyncIterator]) {
    const formData = new FormData()
    formData.append('file', input)
    return formData
  }

  // In Node.js, FormData can be passed a stream so no need to buffer
  if (isNode) {
    const formData = new FormData()
    formData.append('file', toStream(input))
    return formData
  }

  // In the browser there's _currently_ no streaming upload, buffer up our
  // async iterator chunks and append a big Blob :(
  if (isBrowser) {
    // One day, this will be browser streams
    const bufs = []
    for await (const chunk of input) {
      bufs.push(Buffer.isBuffer(chunk) ? chunk.buffer : chunk)
    }
    const formData = new FormData()
    formData.append('file', new Blob(bufs))
    return formData
  }

  throw new Error('unknown environment')
}
