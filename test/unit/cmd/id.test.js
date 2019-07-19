const test = require('ava')
const Filecoin = require('../../../src')

test('should get id', async t => {
  const jsonData = {
    Addresses: [
      '/ip4/127.0.0.1/tcp/6000/ipfs/QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef',
      '/ip4/192.168.1.132/tcp/6000/ipfs/QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef'
    ],
    ID: 'QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef'
  }

  const fetch = () => ({ ok: true, json: () => jsonData })
  const fc = Filecoin(fetch)
  const res = await fc.id()

  t.is(res.id, jsonData.ID)
  t.true(Array.isArray(res.addresses))
  t.deepEqual(res.addresses.map(a => a.toString()), jsonData.Addresses)
})
