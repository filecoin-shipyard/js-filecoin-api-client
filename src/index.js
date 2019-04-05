module.exports = (fetch, config) => {
  if (typeof fetch !== 'function') {
    config = fetch
    fetch = null
  }

  fetch = fetch || require('./lib/fetch').fetch
  config = config || {}

  config.apiAddr = config.apiAddr || '/ip4/127.0.0.1/tcp/3453/http'

  return {
    actor: {
      ls: require('./cmd/actor/ls')(fetch, config)
    },
    address: {
      default: require('./cmd/address/default')(fetch, config),
      lookup: require('./cmd/address/lookup')(fetch, config),
      ls: require('./cmd/address/ls')(fetch, config),
      new: require('./cmd/address/new')(fetch, config)
    },
    bootstrap: {
      ls: require('./cmd/bootstrap/ls')(fetch, config)
    },
    chain: {
      head: require('./cmd/chain/head')(fetch, config),
      ls: require('./cmd/chain/ls')(fetch, config)
    },
    client: {
      cat: require('./cmd/client/cat')(fetch, config),
      import: require('./cmd/client/import')(fetch, config)
    },
    config: {
      get: require('./cmd/config/get')(fetch, config),
      set: require('./cmd/config/set')(fetch, config)
    },
    dht: {
      findProvs: require('./cmd/dht/find-provs')(fetch, config),
      findPeer: require('./cmd/dht/find-peer')(fetch, config)
    },
    id: require('./cmd/id')(fetch, config),
    log: {
      level: require('./cmd/log/level')(fetch, config),
      tail: require('./cmd/log/tail')(fetch, config)
    },
    ping: require('./cmd/ping')(fetch, config),
    show: {
      block: require('./cmd/show/block')(fetch, config)
    },
    stats: {
      bandwidth: require('./cmd/stats/bandwidth')(fetch, config)
    },
    swarm: {
      connect: require('./cmd/swarm/connect')(fetch, config),
      peers: require('./cmd/swarm/peers')(fetch, config)
    },
    version: require('./cmd/version')(fetch, config),
    wallet: {
      balance: require('./cmd/wallet/balance')(fetch, config),
      export: require('./cmd/wallet/export')(fetch, config)
    }
  }
}
