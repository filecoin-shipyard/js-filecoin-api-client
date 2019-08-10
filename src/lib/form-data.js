const toStream = require('it-to-stream')
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

  formData.append(
    'file',
    // FIXME: add a `path` property to the stream so `form-data` doesn't set
    // a Content-Length header that is only the sum of the size of the
    // header/footer when knownLength option (below) is null.
    Object.assign(
      toStream(input),
      { path: input.path || 'file' }
    ),
    {
      filepath: input.path,
      contentType: 'application/octet-stream',
      knownLength: input.length // Send Content-Length header if known
    }
  )

  return formData
}
