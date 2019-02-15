const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should list miner addresses', async t => {
  const fc = Filecoin()
  const addresses = await fc.address.ls()
  t.true(Array.isArray(addresses))
  addresses.forEach(a => t.true(typeof a === 'string'))
})
