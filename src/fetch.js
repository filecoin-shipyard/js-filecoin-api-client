const explain = require('explain-error')

if (typeof window !== 'undefined' || typeof self !== 'undefined') {
  exports.fetch = fetch // eslint-disable-line
} else if (typeof global !== 'undefined') {
  exports.fetch = require('node-fetch')
} else {
  throw new Error('unknown environment')
}

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
