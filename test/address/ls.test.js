const test = require('ava')
const Filecoin = require('../../src')

test('should list miner addresses', async t => {
  const expectedAddrs = [
    'fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e',
    'fcq6pg4anvwxrz27c5zxkm3n2qf6yqmxqfnny0jqk',
    'fcqntxtj4786kfcv0ncfpndr5tucxjnpwt8qda8rd',
    'fcq6qjh02udcv4yv7astq6t9npamq2t5jh8lpa533'
  ]
  const fetch = () => ({
    ok: true,
    text: () => expectedAddrs.map(a => `{"Address":"${a}"}`).join('\n')
  })
  const fc = Filecoin(fetch, { apiAddr: '/ip4/127.0.0.1/tcp/3453/http' })

  const addrs = []
  for await (const addr of fc.address.ls()) addrs.push(addr)
  t.deepEqual(addrs, expectedAddrs)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch, { apiAddr: '/ip4/127.0.0.1/tcp/3453/http' })

  try {
    for await (const _ of fc.address.ls()) { // eslint-disable-line
      t.fail()
    }
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
