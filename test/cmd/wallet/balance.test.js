const test = require('ava')
const Filecoin = require('../../../src')

test('should get wallet balance', async t => {
  const expectedBalance = '6900'
  const fetch = () => ({ ok: true, json: () => expectedBalance })
  const fc = Filecoin(fetch)

  const balance = await fc.wallet.balance('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')
  t.is(balance, expectedBalance)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.wallet.balance('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
