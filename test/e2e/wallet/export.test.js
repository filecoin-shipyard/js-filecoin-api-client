const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should export a wallet', async t => {
  const fc = Filecoin()
  const addresses = await fc.address.ls()
  const data = await fc.wallet.export(addresses[0])

  t.truthy(data.keyInfo)
  t.true(Array.isArray(data.keyInfo))
  t.is(data.keyInfo.length, 1)

  data.keyInfo.forEach(k => {
    t.true(typeof k.privateKey === 'string')
    t.true(typeof k.curve === 'string')
  })
})

test('should export multiple wallets', async t => {
  const fc = Filecoin()

  // Ensure more than one
  await fc.address.new()
  const addresses = await fc.address.ls()
  const data = await fc.wallet.export(addresses)

  t.truthy(data.keyInfo)
  t.true(Array.isArray(data.keyInfo))
  t.is(data.keyInfo.length, addresses.length)

  data.keyInfo.forEach(k => {
    t.true(typeof k.privateKey === 'string')
    t.true(typeof k.curve === 'string')
  })
})
