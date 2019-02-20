const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should tail the log', async t => {
  const fc = Filecoin()

  let i = 0
  for await (const entry of fc.log.tail()) {
    t.truthy(entry)
    i++
    if (i > 2) break // Stream 3 log entries
  }
})
