const test = require('ava')
const { randomBytes } = require('crypto')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterable')

test('should read out piece data stored by a miner on the network', async t => {
  const cid = 'QmZPUUg1QVMciR1yYnC2HSFrXyAUwRvpnbx4haYefB2KY3'
  const miner = 'fcq5y65n23xdkcx2ymakflxpxqhkvewnwswp0me52'
  const chunks = [randomBytes(2048), randomBytes(512), randomBytes(256)]
  const fetch = () => ({ ok: true, body: toAsyncIterable(chunks) })
  const fc = Filecoin(fetch)

  let data = Buffer.alloc(0)
  for await (const chunk of fc.retrievalClient.retrievePiece(miner, cid)) {
    data = Buffer.concat([data, chunk])
  }

  t.deepEqual(data, Buffer.concat(chunks))
})
