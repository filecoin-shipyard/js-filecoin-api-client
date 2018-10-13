module.exports = (fetch, config) => {
  if (!config) {
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
    address: {
      lookup: require('./address/lookup')(fetch, config),
      ls: require('./address/ls')(fetch, config),
      new: require('./address/new')(fetch, config)
    },
    wallet: {
      balance: require('./wallet/balance')(fetch, config)
    }
  }
}
