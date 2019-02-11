const toUri = require('multiaddr-to-uri')
const CID = require('cids')
const explain = require('explain-error')
const { ok, toIterable } = require('../fetch')
const ndjson = require('../ndjson')

module.exports = (fetch, config) => {
  return () => ({
    [Symbol.asyncIterator] (options) {
      return (async function * () {
        options = options || {}

        const url = toUri(config.apiAddr) + '/api/actor/ls'
        const res = await ok(fetch(url, { signal: options.signal }))

        for await (const actor of ndjson(toIterable(res.body))) {
          if (actor.code) {
            try {
              actor.code = new CID(actor.code['/'])
            } catch (err) {
              console.warn(explain(err, 'failed to convert actor code CID'))
            }
          }

          if (actor.head) {
            try {
              actor.head = new CID(actor.head['/'])
            } catch (err) {
              console.warn(explain(err, 'failed to convert actor head CID'))
            }
          }

          yield actor
        }
      })()
    }
  })
}
