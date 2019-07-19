const test = require('ava')
const Multiaddr = require('multiaddr')
const Filecoin = require('../helpers/filecoin')

test('should list swarm peers', async t => {
  const fc = Filecoin()
  const peers = await fc.swarm.peers()

  t.true(Array.isArray(peers))
  peers.forEach(p => t.notThrows(() => Multiaddr(p.addr)))
})
