const test = require('ava')
const Filecoin = require('../helpers/filecoin')
const faucet = require('../helpers/faucet')

test('should create a miner', async t => {
  const fc = Filecoin()

  const walletAddr = await fc.wallet.addrs.new()
  const messageCid = await faucet(walletAddr)

  console.log('waiting for message' + messageCid)

  await fc.message.wait(messageCid)

  const res = await fc.miner.create({ pledge: 1, collateral: 0.0001, price: 0, limit: 1000 })

  console.log(res)
})
