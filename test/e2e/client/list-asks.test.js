const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should list asks', async t => {
  const fc = Filecoin()

  let i = 0
  for await (const ask of fc.client.listAsks()) {
    if (!ask.error) {
      t.true(typeof ask.id === 'number')
      t.true(typeof ask.miner === 'string')
      t.true(typeof ask.price === 'string')
      t.true(typeof ask.expiry === 'number')
    }
    if (i++ >= 5) break
  }
})
