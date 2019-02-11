const test = require('ava')
const Filecoin = require('../../../src')

test('should create new miner address', async t => {
  const expectedAddr = 'fcq6pg4anvwxrz27c5zxkm3n2qf6yqmxqfnny0jqk'
  const fetch = () => ({ ok: true, json: () => ({ Address: expectedAddr }) })
  const fc = Filecoin(fetch)

  const addr = await fc.address.new()
  t.is(addr, expectedAddr)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.address.new()
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
