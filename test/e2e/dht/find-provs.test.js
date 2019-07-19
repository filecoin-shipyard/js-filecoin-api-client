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
      t.notThrows(() => new CID(peer.id))
    }

    t.true(typeof peer.type === 'number')

    peer.responses.forEach((r, j) => {
      t.notThrows(() => new CID(r.id))

      r.addrs.forEach((a, k) => {
        t.notThrows(() => Multiaddr(a))
      })
    })

    if (peer.extra) {
      t.true(typeof peer.extra === 'string')
    }
  }
})
