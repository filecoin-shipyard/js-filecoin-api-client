const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return (minerAddr, cid, options) => (async function * () {
    options = options || {}

    minerAddr = encodeURIComponent(minerAddr)
    cid = encodeURIComponent(cid)

    const url = `${toUri(config.apiAddr)}/api/retrieval-client/retrieve-piece?arg=${minerAddr}&arg=${cid}`
    const res = await ok(fetch(url, { signal: options.signal }))

    yield * toIterable(res.body)
  })()
}
