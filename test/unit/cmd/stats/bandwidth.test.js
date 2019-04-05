const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./bandwidth.fixtures.json')

test('should get bandwidth stats', async t => {
  const fetch = () => ({ ok: true, json: () => Fixtures.sample0 })
  const fc = Filecoin(fetch)

  const stats = await fc.stats.bandwidth()

  t.is(stats.totalIn, Fixtures.sample0.TotalIn)
  t.is(stats.totalOut, Fixtures.sample0.TotalOut)
  t.is(stats.rateIn, Fixtures.sample0.RateIn)
  t.is(stats.rateOut, Fixtures.sample0.RateOut)
})
