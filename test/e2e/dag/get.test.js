const test = require('ava')
const { randomBytes } = require('crypto')
const CID = require('cids')
const UnixFs = require('ipfs-unixfs')
const Filecoin = require('../helpers/filecoin')

test('should get a DAG node', async t => {
  const fc = Filecoin()
  const input = randomBytes(256)

  const cid = await fc.client.import(input)
  t.notThrows(() => new CID(cid))

  const node = await fc.dag.get(cid)
  const meta = UnixFs.unmarshal(Buffer.from(node.data, 'base64'))

  t.deepEqual(meta.data, input)
})
