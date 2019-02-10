const matcher = /\r?\n/

module.exports = source => {
  return (async function * () {
    let buffer = ''
    for await (const chunk of source) {
      const parts = (buffer + chunk).split(matcher)
      buffer = parts.pop()
      for (let i = 0; i < parts.length; i++) {
        yield JSON.parse(parts[i])
      }
    }
    if (buffer) yield JSON.parse(buffer)
  })()
}
