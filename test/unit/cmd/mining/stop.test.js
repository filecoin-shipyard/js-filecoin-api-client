const test = require('ava')
const Filecoin = require('../../../../src')

test('should stop the mining', async t => {
  const expectedMessage = 'Stopped mining'
  const fetch = () => ({ ok: true, json: () => expectedMessage })
  const fc = Filecoin(fetch)

  const msg = await fc.mining.stop()
  t.is(msg, expectedMessage)
})
