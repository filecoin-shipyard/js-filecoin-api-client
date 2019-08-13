const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should import a wallet', async t => {
  const fc = Filecoin()
  const addresses = await fc.address.ls()
  const data = await fc.wallet.export(addresses[0])

  t.truthy(data.keyInfo)
  t.true(Array.isArray(data.keyInfo))

  const res = await fc.wallet.import(data.keyInfo)
  console.log(res.addresses)
  t.true(Array.isArray(res.addresses))
})

test('should import multiple wallets', async t => {
  const fc = Filecoin()

  // Ensure more than one
  await fc.address.new()
  const addresses = await fc.address.ls()
  const data = await fc.wallet.export(addresses)

  const res = await fc.wallet.import(data.keyInfo)
  t.truthy(res.addresses)
  t.true(Array.isArray(res.addresses))
  t.is(res.addresses.length, data.keyInfo.length)
})
