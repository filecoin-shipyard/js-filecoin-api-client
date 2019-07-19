const test = require('ava')
const { randomBytes } = require('crypto')
const CID = require('cids')
const Filecoin = require('../helpers/filecoin')
const { toAsyncIterable } = require('../../helpers/iterable')

test('should import a buffer', async t => {
  const fc = Filecoin()
  const input = randomBytes(256)

  const cid = await fc.client.import(input)
  t.notThrows(() => new CID(cid))

  let output = Buffer.alloc(0)
  for await (const chunk of fc.client.cat(cid)) {
    output = Buffer.concat([output, chunk])
  }

  t.deepEqual(output, input)
})

test('should import an async iterable', async t => {
  const fc = Filecoin()
  const input = [randomBytes(256), randomBytes(32), randomBytes(512)]

  const cid = await fc.client.import(toAsyncIterable(input))
  t.notThrows(() => new CID(cid))

  let output = Buffer.alloc(0)
  for await (const chunk of fc.client.cat(cid)) {
    output = Buffer.concat([output, chunk])
  }

  t.deepEqual(output, Buffer.concat(input))
})
