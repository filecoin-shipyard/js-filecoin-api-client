const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const explain = require('explain-error')
const { ok, toIterable } = require('../../lib/fetch')
const ndjson = require('iterable-ndjson')

module.exports = (fetch, config) => {
  return () => ({
    [Symbol.asyncIterator] (options) {
      return (async function * () {
        options = options || {}

        const url = toUri(config.apiAddr) + '/api/chain/ls'
        const res = await ok(fetch(url, { signal: options.signal }))

        for await (const block of ndjson(toIterable(res.body))) {
          yield block.map(b => {
            if (Array.isArray(b.parents)) {
              b.parents = b.parents.map(p => {
                try {
                  return new CID(p['/'])
                } catch (err) {
                  console.warn(explain(err, 'failed to convert parent CID'))
                  return p
                }
              })
            }

            if (b.stateRoot) {
              try {
                b.stateRoot = new CID(b.stateRoot['/'])
              } catch (err) {
                console.warn(explain(err, 'failed to convert state root CID'))
              }
            }

            return b
          })
        }
      })()
    }
  })
}
