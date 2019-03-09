const test = require('ava')
const CID = require('cids')
const Multiaddr = require('multiaddr')
const Filecoin = require('../helpers/filecoin')

test('should find providers', async t => {
  const fc = Filecoin()

  for await (const peer of fc.dht.findProvs('QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH', { numProviders: 2 })) {
    if (peer.id) {
      t.true(CID.isCID(peer.id))
    }

    t.true(typeof peer.type === 'number')

    peer.responses.forEach((r, j) => {
      t.true(CID.isCID(r.id))

      r.addrs.forEach((a, k) => {
        t.true(Multiaddr.isMultiaddr(a))
      })
    })

    if (peer.extra) {
      t.true(typeof peer.extra === 'string')
    }
  }
})
