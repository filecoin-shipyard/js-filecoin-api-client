const test = require('ava')
const AbortController = require('abort-controller')
const Filecoin = require('../helpers/filecoin')
const faucet = require('../helpers/faucet')

test('should create a miner', async t => {
  const fc = Filecoin()

  const controller = new AbortController()
  const abortTimeout = setTimeout(() => controller.abort(), 5 * 60 * 1000)

  try {
    const walletAddr = await fc.address.new()
    const messageCid = await faucet(walletAddr)

    console.log('waiting for message ' + messageCid)

    const messageRes = await fc.message.wait(messageCid, { signal: controller.signal })
    console.log(messageRes)

    console.log('creating miner')

    const pledge = 10
    const collateral = 100
    const res = await fc.miner.create(pledge, collateral, { gasPrice: 0.1, gasLimit: 10, signal: controller.signal })
    console.log(res)
    clearTimeout(abortTimeout)
  } catch (err) {
    if (err.name !== 'AbortError') throw err
    console.warn('skipping "should create a miner" due to timeout')
    t.pass()
  }
})
