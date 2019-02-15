const test = require('ava')
const Filecoin = require('../helpers/filecoin')

// TODO: why can't we lookup ourself?
test.skip('should lookup own address', async t => {
  const fc = Filecoin()
  const { addresses } = await fc.address.ls()
  const res = await fc.address.lookup(addresses[0])
  t.truthy(res)
})
