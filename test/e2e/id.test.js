const test = require('ava')
const CID = require('cids')
const Filecoin = require('./helpers/filecoin')

test('should get id', async t => {
  const fc = Filecoin()
  const res = await fc.id()

  t.true(CID.isCID(res.id))
  t.true(Array.isArray(res.addresses))
})
