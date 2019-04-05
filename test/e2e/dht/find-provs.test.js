const test = require('ava')
const CID = require('cids')
const Multiaddr = require('multiaddr')
const { randomBytes } = require('crypto')
const Filecoin = require('../helpers/filecoin')

test('should find providers', async t => {
  const fc = Filecoin()

  const input = randomBytes(256)
  const cid = await fc.client.import(input)

  for await (const peer of fc.dht.findProvs(cid, { numProviders: 1 })) {
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
