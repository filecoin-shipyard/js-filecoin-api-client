const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./ls.fixtures.json')

test('should list logging subsystems', async t => {
  const fetch = () => ({ ok: true, json: () => Fixtures.sample0 })
  const fc = Filecoin(fetch)

  const subsystems = await fc.log.ls()
  t.deepEqual(subsystems, Fixtures.sample0)
})
