const test = require('ava')
const Filecoin = require('../../helpers/filecoin')

test('should get wallet addrs', async t => {
  const fc = Filecoin()
  const res = await fc.wallet.addrs.ls()

  t.true(Array.isArray(res.addresses))
  res.addresses.forEach(a => t.true(typeof a === 'string'))
})
