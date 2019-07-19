const ndjson = require('iterable-ndjson')
const toUri = require('../../lib/multiaddr-to-uri')
const { ok, toIterable } = require('../../lib/fetch')

module.exports = (fetch, config) => {
  return options => (async function * () {
    options = options || {}

    const url = toUri(config.apiAddr) + '/api/actor/ls'
    const res = await ok(fetch(url, { signal: options.signal }))

    for await (const actor of ndjson(toIterable(res.body))) {
      if (actor.code) {
        actor.code = actor.code['/']
      }

      if (actor.head) {
        actor.head = actor.head['/']
      }

      yield actor
    }
  })()
}
