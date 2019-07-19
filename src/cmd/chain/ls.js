const ndjson = require('iterable-ndjson')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return options => (async function * () {
    options = options || {}

    const url = toUri(config.apiAddr) + '/api/chain/ls'
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const block of ndjson(toIterable(res.body))) {
      yield block.map(b => {
        if (Array.isArray(b.parents)) {
          b.parents = b.parents.map(p => p['/'])
        }

        if (b.stateRoot) {
          b.stateRoot = b.stateRoot['/']
        }

        return b
      })
    }
  })()
}
