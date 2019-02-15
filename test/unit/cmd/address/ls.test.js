const test = require('ava')
const Filecoin = require('../../../../src')

test('should list miner addresses', async t => {
  const expectedAddrs = [
    'fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e',
    'fcq6pg4anvwxrz27c5zxkm3n2qf6yqmxqfnny0jqk',
    'fcqntxtj4786kfcv0ncfpndr5tucxjnpwt8qda8rd',
    'fcq6qjh02udcv4yv7astq6t9npamq2t5jh8lpa533'
  ]
  const fetch = () => ({
    ok: true,
    json: () => ({ Addresses: expectedAddrs })
  })
  const fc = Filecoin(fetch)

  const addresses = await fc.address.ls()
  t.deepEqual(addresses, expectedAddrs)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.address.ls()
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
