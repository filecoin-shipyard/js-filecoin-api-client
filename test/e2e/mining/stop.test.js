const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should stop the mining', async t => {
  const fc = Filecoin()
  const msg = await fc.mining.stop()
  t.is(msg, 'Stopped mining')
})
