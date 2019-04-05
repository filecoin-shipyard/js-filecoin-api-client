const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should list logging subsystems', async t => {
  const fc = Filecoin()
  const subsystems = await fc.log.ls()
  t.true(Array.isArray(subsystems))
  subsystems.forEach(a => t.true(typeof a === 'string'))
})
