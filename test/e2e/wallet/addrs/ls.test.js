const test = require('ava')
const Filecoin = require('../../helpers/filecoin')

test('should get wallet addrs', async t => {
  const fc = Filecoin()
  const addresses = await fc.wallet.addrs.ls()

  t.true(Array.isArray(addresses))
  addresses.forEach(a => t.true(typeof a === 'string'))
})
