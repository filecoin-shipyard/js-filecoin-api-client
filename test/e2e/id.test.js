const test = require('ava')
const CID = require('cids')
const Filecoin = require('./helpers/filecoin')

test('should get id', async t => {
  const fc = Filecoin()
  const res = await fc.id()

  t.notThrows(() => new CID(res.id))
  t.true(Array.isArray(res.addresses))
})
