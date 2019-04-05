const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should fetch default address', async t => {
  const fc = Filecoin()

  const addr = await fc.address.default()
  t.true(typeof addr === 'string')
})
