const test = require('ava')
const Multiaddr = require('multiaddr')
const Filecoin = require('../../../../src')

test('should list swarm peers', async t => {
  const data = {
    Peers: [{
      Addr: '/ip4/103.233.252.158/tcp/6000',
      Peer: 'QmZUWJ1Uhwjf5ytfTD1ZEh2jJGrp78gFyx9F6sZ9WnqFVR',
      Latency: '',
      Muxer: '',
      Streams: null
    }]
  }

  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)

  const peers = await fc.swarm.peers()

  t.true(Array.isArray(peers))
  t.is(peers.length, 1)

  peers.forEach((p, i) => {
    t.is(Object.keys(p).length, 1)
    t.true(Multiaddr.isMultiaddr(p.addr))
    t.is(p.addr.toString(), data.Peers[i].Addr + '/ipfs/' + data.Peers[i].Peer)
  })
})

test('should list swarm peers with verbose option', async t => {
  const data = {
    Peers: [{
      Addr: '/ip4/103.233.252.158/tcp/6000',
      Peer: 'QmZUWJ1Uhwjf5ytfTD1ZEh2jJGrp78gFyx9F6sZ9WnqFVR',
      Latency: '213.287947ms',
      Muxer: '',
      Streams: [
        { Protocol: '/fil/hello/1.0.0' },
        { Protocol: '/fil/hello/1.0.0' },
        { Protocol: '/fil/kad/1.0.0' },
        { Protocol: '/floodsub/1.0.0' },
        { Protocol: '/floodsub/1.0.0' },
        { Protocol: '/ipfs/bitswap/1.1.0' }
      ]
    }]
  }

  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)

  const peers = await fc.swarm.peers({ verbose: true })

  t.true(Array.isArray(peers))
  t.is(peers.length, 1)

  peers.forEach((p, i) => {
    t.is(Object.keys(p).length, 4)
    t.true(Multiaddr.isMultiaddr(p.addr))
    t.is(p.addr.toString(), data.Peers[i].Addr + '/ipfs/' + data.Peers[i].Peer)
    t.is(p.latency, data.Peers[i].Latency)
    t.is(p.muxer, data.Peers[i].Muxer)
    t.true(Array.isArray(p.streams))
    t.true(p.streams.every((s, j) => s.protocol === data.Peers[i].Streams[j].Protocol))
  })
})

test('should list swarm peers with streams option', async t => {
  const data = {
    Peers: [{
      Addr: '/ip4/103.233.252.158/tcp/6000',
      Peer: 'QmZUWJ1Uhwjf5ytfTD1ZEh2jJGrp78gFyx9F6sZ9WnqFVR',
      Latency: '',
      Muxer: '',
      Streams: [
        { Protocol: '/fil/hello/1.0.0' },
        { Protocol: '/fil/hello/1.0.0' },
        { Protocol: '/fil/kad/1.0.0' },
        { Protocol: '/floodsub/1.0.0' },
        { Protocol: '/floodsub/1.0.0' },
        { Protocol: '/ipfs/bitswap/1.1.0' }
      ]
    }]
  }

  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)

  const peers = await fc.swarm.peers({ streams: true })

  t.true(Array.isArray(peers))
  t.is(peers.length, 1)

  peers.forEach((p, i) => {
    t.is(Object.keys(p).length, 2)
    t.true(Multiaddr.isMultiaddr(p.addr))
    t.is(p.addr.toString(), data.Peers[i].Addr + '/ipfs/' + data.Peers[i].Peer)
    t.true(Array.isArray(p.streams))
    t.true(p.streams.every((s, j) => s.protocol === data.Peers[i].Streams[j].Protocol))
  })
})

test('should list swarm peers with latency option', async t => {
  const data = {
    Peers: [{
      Addr: '/ip4/103.233.252.158/tcp/6000',
      Peer: 'QmZUWJ1Uhwjf5ytfTD1ZEh2jJGrp78gFyx9F6sZ9WnqFVR',
      Latency: '213.287947ms',
      Muxer: '',
      Streams: null
    }]
  }

  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)

  const peers = await fc.swarm.peers({ latency: true })

  t.true(Array.isArray(peers))
  t.is(peers.length, 1)

  peers.forEach((p, i) => {
    t.is(Object.keys(p).length, 2)
    t.true(Multiaddr.isMultiaddr(p.addr))
    t.is(p.addr.toString(), data.Peers[i].Addr + '/ipfs/' + data.Peers[i].Peer)
    t.is(p.latency, data.Peers[i].Latency)
  })
})
