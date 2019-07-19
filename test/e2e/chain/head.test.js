const test = require('ava')
const CID = require('cids')
const Filecoin = require('../helpers/filecoin')

test('should get chain heads', async t => {
  const fc = Filecoin()

  const heads = await fc.chain.head('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')
  t.true(Array.isArray(heads))
  heads.forEach(h => t.notThrows(() => new CID(h)))
})
