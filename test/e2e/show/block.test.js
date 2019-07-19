const test = require('ava')
const CID = require('cids')
const Filecoin = require('../helpers/filecoin')

test('should show block info', async t => {
  const fc = Filecoin()
  const cid = await fc.chain.head()
  const block = await fc.show.block(cid)

  t.truthy(block)
  t.notThrows(() => new CID(block.stateRoot))
})
