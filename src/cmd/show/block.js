const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const explain = require('explain-error')
const { ok } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return async (cid, options) => {
    options = options || {}

    const url = `${toUri(config.apiAddr)}/api/show/block?arg=${encodeURIComponent(cid)}`
    const res = await ok(fetch(url, { signal: options.signal }))
    const block = await res.json()

    if (Array.isArray(block.parents)) {
      block.parents = block.parents.map(p => {
        try {
          return new CID(p['/'])
        } catch (err) {
          console.warn(explain(err, 'failed to convert parent CID'))
          return p
        }
      })
    }

    if (block.stateRoot) {
      try {
        block.stateRoot = new CID(block.stateRoot['/'])
      } catch (err) {
        console.warn(explain(err, 'failed to convert state root CID'))
      }
    }

    return block
  }
}
