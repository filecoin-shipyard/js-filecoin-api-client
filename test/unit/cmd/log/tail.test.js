const test = require('ava')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterable')
const Fixtures = require('./tail.fixtures.json')

test('should tail the log', async t => {
  const fetch = () => ({
    ok: true,
    body: toAsyncIterable(Fixtures.sample0.map(l => JSON.stringify(l) + '\n'))
  })
  const fc = Filecoin(fetch)

  let i = 0
  for await (const entry of fc.log.tail()) {
    t.deepEqual(entry, Fixtures.sample0[i])
    i++
  }
})
