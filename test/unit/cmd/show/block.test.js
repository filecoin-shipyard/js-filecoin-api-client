const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./block.fixtures.json')

test('should show block info', async t => {
  const fetch = () => ({ ok: true, json: () => Fixtures.sample0 })
  const fc = Filecoin(fetch)
  const block = await fc.show.block('zDPWYqFCutuHwRZhGXzji9L4eHeoFxxNCxCruGjWje36aAvbK2XV')

  t.deepEqual(block, Fixtures.sample0)
})
