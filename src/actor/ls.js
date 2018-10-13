const toUri = require('multiaddr-to-uri')
const { ok } = require('../fetch')

module.exports = (fetch, config) => {
  return () => ({
    [Symbol.asyncIterator] (options) {
      return (async function * () {
        options = options || {}
        const url = toUri(config.apiAddr) + '/api/actor/ls'
        const res = await ok(fetch(url, { signal: options.signal }))
        const data = await res.text()
        const lines = data.split('\n').filter(Boolean)
        for (const line of lines) yield JSON.parse(line)
      })()
    }
  })
}
