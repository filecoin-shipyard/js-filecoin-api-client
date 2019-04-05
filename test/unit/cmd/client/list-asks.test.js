const test = require('ava')
const CID = require('cids')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterable')
const Fixtures = require('./list-asks.fixtures.json')

test('should list asks', async t => {
  const fetch = () => ({
    ok: true,
    body: toAsyncIterable(Fixtures.sample0.map(ask => JSON.stringify(ask) + '\n'))
  })
  const fc = Filecoin(fetch)

  let i = 0
  for await (const ask of fc.client.listAsks()) {
    t.is(ask.id, Fixtures.sample0[i].ID)
    t.is(ask.miner, Fixtures.sample0[i].Miner)
    t.is(ask.price, Fixtures.sample0[i].Price)
    t.is(ask.expiry, Fixtures.sample0[i].Expiry)
    i++
  }
})
