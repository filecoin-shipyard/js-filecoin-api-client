const test = require('ava')
const Filecoin = require('./helpers/filecoin')

test('should get version', async t => {
  const fc = Filecoin()
  const res = await fc.version()

  t.true(typeof res.commit === 'string')
})
