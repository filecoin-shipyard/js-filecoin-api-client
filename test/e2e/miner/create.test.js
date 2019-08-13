const test = require('ava')
const AbortController = require('abort-controller')
const Filecoin = require('../helpers/filecoin')
const faucet = require('../helpers/faucet')

// FIXME: miner.create can only be called once, so e2e tests need to be changed
// to spin up a new filecoin node for this test
// https://github.com/filecoin-shipyard/js-filecoin-api-client/issues/69
test.skip('should create a miner', async t => {
  const fc = Filecoin()

  const controller = new AbortController()
  const abortTimeout = setTimeout(() => controller.abort(), 5 * 60 * 1000)

  try {
    const walletAddr = await fc.address.new()
    const messageCid = await faucet(walletAddr)

    console.log('waiting for message ' + messageCid)

    await fc.message.wait(messageCid, { signal: controller.signal })

    console.log('creating miner')

    const collateral = 100
    const res = await fc.miner.create(collateral, {
      gasPrice: 0.1,
      gasLimit: 300,
      from: walletAddr,
      signal: controller.signal
    })
    console.log(JSON.stringify(res, null, 2))
    clearTimeout(abortTimeout)
  } catch (err) {
    if (err.name !== 'AbortError') throw err
    console.warn('skipping "should create a miner" due to timeout')
    t.pass()
  }
})
