const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should list bootstrap node addresses', async t => {
  const fc = Filecoin()

  const addrs = await fc.bootstrap.ls()
  t.true(Array.isArray(addrs))
  addrs.forEach(a => t.true(typeof a === 'string'))
})
