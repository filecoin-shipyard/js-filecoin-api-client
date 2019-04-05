const test = require('ava')
const Filecoin = require('../../../../src')

test('should fetch default miner address', async t => {
  const expectedAddr = 't1gwlbykvhfrkhrtll43ceiyzgggk7omnololcwpy'
  const fetch = () => ({ ok: true, json: () => ({ Address: expectedAddr }) })
  const fc = Filecoin(fetch)

  const addr = await fc.address.default()
  t.is(addr, expectedAddr)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, text: () => JSON.stringify({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.address.default()
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
