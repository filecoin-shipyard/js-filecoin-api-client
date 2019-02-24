const test = require('ava')
const CID = require('cids')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterator')

test('should get blockchain', async t => {
  const expectedBlocks = [
    [{ miner: 'fcq5y65n23xdkcx2ymakflxpxqhkvewnwswp0me52' }],
    [{ miner: 'fcq9vwjadr749mnnndadqwxedrpuewnx09qe23atk' }]
  ]
  const fetch = () => ({
    ok: true,
    body: toAsyncIterable([expectedBlocks.map(b => JSON.stringify(b)).join('\n')])
  })
  const fc = Filecoin(fetch)

  const blocks = []
  for await (const block of fc.chain.ls()) blocks.push(block)
  t.deepEqual(blocks, expectedBlocks)
})

test('should deserialize parent CIDs', async t => {
  const expectedBlocks = [
    [{
      miner: 'fcq5y65n23xdkcx2ymakflxpxqhkvewnwswp0me52',
      parents: [{ '/': 'zDPWYqFD2UfFjGbkQcfVX5BM75Wr1xQTBoKpwMBKgYZcBCdPw7Au' }]
    }]
  ]
  const fetch = () => ({
    ok: true,
    body: toAsyncIterable([expectedBlocks.map(b => JSON.stringify(b)).join('\n')])
  })
  const fc = Filecoin(fetch)

  const blocks = []
  for await (const block of fc.chain.ls()) blocks.push(block)

  expectedBlocks.forEach((expectedBlock, i) => {
    expectedBlock.forEach((expectedHead, j) => {
      expectedHead.parents.forEach((expectedParent, k) => {
        t.true(CID.isCID(blocks[i][j].parents[k]))
        t.is(blocks[i][j].parents[k].toString(), expectedParent['/'])
      })
    })
  })
})

test('should deserialize state root CID', async t => {
  const expectedBlocks = [
    [{
      miner: 'fcq5y65n23xdkcx2ymakflxpxqhkvewnwswp0me52',
      stateRoot: { '/': 'zdpuAvER9XYSRZFk8HJxmAp8qTTiaqPDk3ZtBg8bPmmTE8HBV' }
    }]
  ]
  const fetch = () => ({
    ok: true,
    body: toAsyncIterable([expectedBlocks.map(b => JSON.stringify(b)).join('\n')])
  })
  const fc = Filecoin(fetch)

  const blocks = []
  for await (const block of fc.chain.ls()) blocks.push(block)

  expectedBlocks.forEach((expectedBlock, i) => {
    expectedBlock.forEach((expectedHead, j) => {
      t.true(CID.isCID(blocks[i][j].stateRoot))
      t.is(blocks[i][j].stateRoot.toString(), expectedHead.stateRoot['/'])
    })
  })
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    for await (const _ of fc.chain.ls()) { // eslint-disable-line
      t.fail()
    }
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
