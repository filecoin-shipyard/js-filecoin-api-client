const test = require('ava')
const Filecoin = require('../../../../src')

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, text: () => JSON.stringify({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.address.lookup('fcq6qjh02udcv4yv7astq6t9npamq2t5jh8lpa533')
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
