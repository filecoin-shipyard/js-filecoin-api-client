const test = require('ava')
const Multiaddr = require('multiaddr')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterable')
const Fixtures = require('./find-peer.fixtures.json')

test('should find multiaddrs of peer', async t => {
  const fetch = () => ({
    ok: true,
    body: toAsyncIterable(Fixtures.sample0.map(p => `${JSON.stringify(p)}\n`))
  })
  const fc = Filecoin(fetch)

  let i = 0
  for await (const addr of fc.dht.findPeer('QmWLtQBDSFpfeD3k23rYhsQ8cS7a4WCRNHWz9UvrsaT2UE')) {
    t.notThrows(() => Multiaddr(addr))
    t.is(addr.toString(), Fixtures.sample0[i])

    i++
  }
})
