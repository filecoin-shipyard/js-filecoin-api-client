const { StringDecoder } = require('string_decoder')
const matcher = /\r?\n/

module.exports = source => (async function * () {
  const decoder = new StringDecoder('utf8')
  let buffer = ''
  for await (const chunk of source) {
    buffer += decoder.write(Buffer.from(chunk))
    const parts = buffer.split(matcher)
    buffer = parts.pop()
    for (let i = 0; i < parts.length; i++) {
      yield JSON.parse(parts[i])
    }
  }
  buffer += decoder.end()
  if (buffer) yield JSON.parse(buffer)
})()
