const test = require('ava')
const Filecoin = require('./helpers/filecoin')

test('should ping a peer', async t => {
  const fc = Filecoin()

  let peers
  while (true) {
    peers = await fc.swarm.peers()
    if (peers.length) break
  }

  const peerId = peers[0].addr.getPeerId()

  let i = 0
  for await (const pong of fc.ping(peerId, { count: 2 })) {
    t.false(Number.isNaN(pong.time))
    t.is(pong.count, i)
    i++
  }
})
