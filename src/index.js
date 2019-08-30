module.exports = (fetch, config) => {
  if (typeof fetch !== 'function') {
    config = fetch
    fetch = null
  }

  fetch = fetch || require('./lib/fetch').fetch
  config = config || {}
  if (typeof config === 'string') config = { apiAddr: config }

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
      import: require('./cmd/client/import')(fetch, config),
      listAsks: require('./cmd/client/list-asks')(fetch, config),
      payments: require('./cmd/client/payments')(fetch, config),
      proposeStorageDeal: require('./cmd/client/propose-storage-deal')(fetch, config),
      queryStorageDeal: require('./cmd/client/query-storage-deal')(fetch, config)
    },
    config: {
      get: require('./cmd/config/get')(fetch, config),
      set: require('./cmd/config/set')(fetch, config)
    },
    dag: {
      get: require('./cmd/dag/get')(fetch, config)
    },
    dht: {
      findProvs: require('./cmd/dht/find-provs')(fetch, config),
      findPeer: require('./cmd/dht/find-peer')(fetch, config)
    },
    id: require('./cmd/id')(fetch, config),
    log: {
      level: require('./cmd/log/level')(fetch, config),
      ls: require('./cmd/log/ls')(fetch, config),
      tail: require('./cmd/log/tail')(fetch, config)
    },
    message: {
      wait: require('./cmd/message/wait')(fetch, config)
    },
    miner: {
      create: require('./cmd/miner/create')(fetch, config)
    },
    mining: {
      stop: require('./cmd/mining/stop')(fetch, config)
    },
    ping: require('./cmd/ping')(fetch, config),
    retrievalClient: {
      retrievePiece: require('./cmd/retrieval-client/retrieve-piece')(fetch, config)
    },
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
      export: require('./cmd/wallet/export')(fetch, config),
      import: require('./cmd/wallet/import')(fetch, config)
    }
  }
}
