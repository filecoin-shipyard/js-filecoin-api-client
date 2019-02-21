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
      cat: require('./cmd/client/cat')(fetch, config)
    },
    config: {
      get: require('./cmd/config/get')(fetch, config),
      set: require('./cmd/config/set')(fetch, config)
    },
    id: require('./cmd/id')(fetch, config),
    log: {
      tail: require('./cmd/log/tail')(fetch, config)
    },
    swarm: {
      connect: require('./cmd/swarm/connect')(fetch, config),
      peers: require('./cmd/swarm/peers')(fetch, config)
    },
    version: require('./cmd/version')(fetch, config),
    wallet: {
      addrs: {
        ls: require('./cmd/wallet/addrs/ls')(fetch, config)
      },
      balance: require('./cmd/wallet/balance')(fetch, config)
    }
  }
}
