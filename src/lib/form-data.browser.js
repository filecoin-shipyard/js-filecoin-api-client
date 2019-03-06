/* eslint-env browser */

const isBuffer = require('is-buffer')

exports.toFormData = async function toFormData (input) {
  // If not an async iterator, this must conform to whatever FormData allows
  if (!input[Symbol.asyncIterator]) {
    const formData = new FormData()
    formData.append('file', input)
    return formData
  }

  // In the browser there's _currently_ no streaming upload, buffer up our
  // async iterator chunks and append a big Blob :(

  // One day, this will be browser streams
  const formData = new FormData()
  const bufs = []
  for await (const chunk of input) {
    bufs.push(isBuffer(chunk) ? chunk.buffer : chunk)
  }
  formData.append('file', new Blob(bufs))
  return formData
}
