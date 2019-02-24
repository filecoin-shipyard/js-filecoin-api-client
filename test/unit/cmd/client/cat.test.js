const test = require('ava')
const { randomBytes } = require('crypto')
const CID = require('cids')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterable')

test('should cat a file with CID string', async t => {
  const cid = 'QmZPUUg1QVMciR1yYnC2HSFrXyAUwRvpnbx4haYefB2KY3'
  const chunks = [randomBytes(2048), randomBytes(512), randomBytes(256)]
  const fetch = () => ({ ok: true, body: toAsyncIterable(chunks) })
  const fc = Filecoin(fetch)

  let data = Buffer.alloc(0)
  for await (const chunk of fc.client.cat(cid)) {
    data = Buffer.concat([data, chunk])
  }

  t.deepEqual(data, Buffer.concat(chunks))
})

test('should cat a file with CID instance', async t => {
  const cid = new CID('QmZPUUg1QVMciR1yYnC2HSFrXyAUwRvpnbx4haYefB2KY3')
  const chunks = [randomBytes(2048), randomBytes(512), randomBytes(256)]
  const fetch = url => {
    url = new URL(url)
    // Ensure the CID was encoded properly
    t.is(url.searchParams.get('arg'), cid.toString())
    return { ok: true, body: toAsyncIterable(chunks) }
  }
  const fc = Filecoin(fetch)

  let data = Buffer.alloc(0)
  for await (const chunk of fc.client.cat(cid)) {
    data = Buffer.concat([data, chunk])
  }

  t.deepEqual(data, Buffer.concat(chunks))
})
