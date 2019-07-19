const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return (cid, options) => (async function * () {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/client/cat?arg=${encodeURIComponent(cid)}`
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const chunk of toIterable(res.body)) {
      yield chunk
    }
  })()
}
