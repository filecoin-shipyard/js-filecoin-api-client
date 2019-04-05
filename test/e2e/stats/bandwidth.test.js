const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should get bandwidth stats', async t => {
  const fc = Filecoin()

  const stats = await fc.stats.bandwidth()

  t.true(typeof stats.totalIn === 'number')
  t.true(typeof stats.totalOut === 'number')
  t.true(typeof stats.rateIn === 'number')
  t.true(typeof stats.rateOut === 'number')
})
