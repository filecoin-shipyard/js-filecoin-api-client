const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should get blockchain', async t => {
  const fc = Filecoin()

  let block
  for await (block of fc.chain.ls()) break
  t.true(Array.isArray(block))
  block.forEach(b => t.true(typeof block[0].miner === 'string'))
})
