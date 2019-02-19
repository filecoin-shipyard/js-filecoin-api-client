const test = require('ava')
const CID = require('cids')
const Filecoin = require('../../../../src')

test('should connect to an address', async t => {
  const addr = '/ip4/192.168.1.1/tcp/6000/ipfs/QmQbd6WxZ3pwcwWn21MvgH1zH4m8hk148kTfoB6BNFa5hK'
  const data = [{
    Peer: 'QmQbd6WxZ3pwcwWn21MvgH1zH4m8hk148kTfoB6BNFa5hK',
    Success: true
  }]

  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)

  const res = await fc.swarm.connect(addr)

  t.true(Array.isArray(res))
  t.is(res.length, 1)

  res.forEach((p, i) => {
    t.is(Object.keys(p).length, 2)
    t.true(CID.isCID(p.peer))
    t.is(p.peer.toString(), data[i].Peer)
    t.is(p.success, data[i].Success)
  })
})

test('should connect to multiple addresses', async t => {
  const addrs = [
    '/ip4/192.168.1.1/tcp/6000/ipfs/QmQbd6WxZ3pwcwWn21MvgH1zH4m8hk148kTfoB6BNFa5hK',
    '/ip4/192.168.1.2/tcp/6000/ipfs/QmZUWJ1Uhwjf5ytfTD1ZEh2jJGrp78gFyx9F6sZ9WnqFVR'
  ]

  const data = [{
    Peer: 'QmQbd6WxZ3pwcwWn21MvgH1zH4m8hk148kTfoB6BNFa5hK',
    Success: true
  }, {
    Peer: 'QmZUWJ1Uhwjf5ytfTD1ZEh2jJGrp78gFyx9F6sZ9WnqFVR',
    Success: false
  }]

  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)

  const res = await fc.swarm.connect(addrs)

  t.true(Array.isArray(res))
  t.is(res.length, 2)

  res.forEach((p, i) => {
    t.is(Object.keys(p).length, 2)
    t.true(CID.isCID(p.peer))
    t.is(p.peer.toString(), data[i].Peer)
    t.is(p.success, data[i].Success)
  })
})
