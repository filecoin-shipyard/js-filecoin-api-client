const test = require('ava')
const Filecoin = require('../../src')

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch, { apiAddr: '/ip4/127.0.0.1/tcp/3453/http' })

  try {
    await fc.address.lookup('fcq6qjh02udcv4yv7astq6t9npamq2t5jh8lpa533')
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
