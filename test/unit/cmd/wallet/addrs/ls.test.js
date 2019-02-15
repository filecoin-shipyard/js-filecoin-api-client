const test = require('ava')
const Filecoin = require('../../../../../src')

test('should get wallet addrs', async t => {
  const addr = '4e75ee9b601525c45eb255d80ccb73de35102c6d'
  const fetch = () => ({ ok: true, json: () => ({ Addresses: [addr] }) })
  const fc = Filecoin(fetch)
  const addresses = await fc.wallet.addrs.ls()

  t.deepEqual(addresses, [addr])
})
