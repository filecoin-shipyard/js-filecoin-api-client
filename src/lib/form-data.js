// const toStream = require('async-iterator-to-stream')
const FormData = require('form-data')

exports.toFormData = async function toFormData (input) {
  // If not an async iterator, this must conform to whatever FormData allows
  if (!input[Symbol.asyncIterator]) {
    const formData = new FormData()
    formData.append('file', input)
    return formData
  }

  // In Node.js, FormData can be passed a stream so no need to buffer
  const formData = new FormData()
  const bufs = []
  for await (const chunk of input) {
    bufs.push(Buffer.from(chunk))
  }
  // FIXME: the below does not work! It should do, but only the first chunk
  // gets uploaded :(
  // formData.append('file', toStream(input))
  formData.append('file', Buffer.concat(bufs))
  return formData
}
