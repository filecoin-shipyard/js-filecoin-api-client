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

  for await (const pong of fc.ping(peerId)) {
    t.false(Number.isNaN(pong.time))
    t.true(typeof pong.text === 'string')
    t.true(pong.success === true || pong.success === false)
  }
})
