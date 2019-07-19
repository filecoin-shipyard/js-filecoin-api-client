const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (cid, options) => {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/show/block?arg=${encodeURIComponent(cid)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const block = await res.json()

    if (Array.isArray(block.parents)) {
      block.parents = block.parents.map(p => p['/'])
    }

    if (block.stateRoot) {
      block.stateRoot = block.stateRoot['/']
    }

    return block
  }
}
