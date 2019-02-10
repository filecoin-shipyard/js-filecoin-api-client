/* eslint-env browser */

const explain = require('explain-error')

if (typeof window !== 'undefined' || typeof self !== 'undefined') {
  // Browser/worker
  exports.fetch = fetch // eslint-disable-line
} else if (typeof global !== 'undefined') {
  // Node.js
  exports.fetch = require('node-fetch')
} else {
  throw new Error('unknown environment')
}

// Ensure fetch response is ok (200)
// and if not, attempt to JSON parse body, extract error message and throw
exports.ok = async res => {
  res = await res

  if (!res.ok) {
    const defaultMsg = `unexpected status ${res.status}`
    let msg
    try {
      const data = await res.json()
      msg = data.message || data.Message
    } catch (err) {
      throw explain(err, defaultMsg)
    }
    throw new Error(msg || defaultMsg)
  }

  return res
}

exports.toIterable = body => {
  if (body[Symbol.asyncIterator]) {
    return body[Symbol.asyncIterator]()
  }

  if (body.getReader) {
    return (async function * () {
      const reader = body.getReader()

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) return
          yield value
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  throw new Error('unknown stream')
}
