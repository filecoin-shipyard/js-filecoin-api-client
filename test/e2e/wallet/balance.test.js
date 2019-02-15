const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should get wallet balance', async t => {
  const fc = Filecoin()
  const addresses = await fc.wallet.addrs.ls()
  const balance = await fc.wallet.balance(addresses[0])

  t.false(isNaN(parseInt(balance)))
})
