const test = require('ava')
const Filecoin = require('../helpers/filecoin')
const faucet = require('../helpers/faucet')

test('should create a miner', async t => {
  const fc = Filecoin()

  const walletAddr = await fc.address.new()
  const messageCid = await faucet(walletAddr)

  console.log('waiting for message ' + messageCid)

  await fc.message.wait(messageCid)

  const pledge = 10
  const collateral = 100
  const res = await fc.miner.create(pledge, collateral, { gasPrice: 0.1, gasLimit: 10 })

  console.log(res)
})
