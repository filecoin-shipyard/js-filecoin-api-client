const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should import a wallet', async t => {
  const fc = Filecoin()
  const addresses = await fc.address.ls()
  const data = await fc.wallet.export(addresses[0])
  
  t.truthy(data.keyInfo)
  t.true(Array.isArray(data.keyInfo))

  const datai = await fc.wallet.import(data.keyInfo)
  t.true(Array.isArray(datai.addresses))
})
