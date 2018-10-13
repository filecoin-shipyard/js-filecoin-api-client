module.exports = (fetch, config) => {
  if (typeof fetch !== 'function') {
    config = fetch
    fetch = null
  }

  fetch = fetch || require('./fetch').fetch
  config = config || {}

  config.apiAddr = config.apiAddr || '/ip4/127.0.0.1/tcp/3453/http'

  return {
    actor: {
      ls: require('./actor/ls')(fetch, config)
    },
    bootstrap: {
      ls: require('./bootstrap/ls')(fetch, config)
    },
    address: {
      lookup: require('./address/lookup')(fetch, config),
      ls: require('./address/ls')(fetch, config),
      new: require('./address/new')(fetch, config)
    },
    chain: {
      head: require('./chain/head')(fetch, config),
      ls: require('./chain/ls')(fetch, config)
    },
    wallet: {
      balance: require('./wallet/balance')(fetch, config)
    }
  }
}
