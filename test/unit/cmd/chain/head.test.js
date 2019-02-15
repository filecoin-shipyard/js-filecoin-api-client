const test = require('ava')
const Filecoin = require('../../../../src')

test('should get chain heads', async t => {
  const expectedCids = ['zDPWYqFCrhCRdGa1Z84DBpSQ5rrHphwjs7qHe5uS2LFurdnE6vvF']
  const fetch = () => ({
    ok: true,
    json: () => expectedCids.map(cid => ({ '/': cid }))
  })
  const fc = Filecoin(fetch)

  const heads = await fc.chain.head('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')
  t.deepEqual(heads.map(cid => cid.toString()), expectedCids)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.chain.head()
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
