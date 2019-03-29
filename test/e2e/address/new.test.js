const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should create new address', async t => {
  const fc = Filecoin()

  const addr = await fc.address.new()
  t.true(typeof addr === 'string')
})
