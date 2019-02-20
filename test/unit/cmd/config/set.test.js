const test = require('ava')
const Filecoin = require('../../../../src')

test('should set config value', async t => {
  const data = '/ip4/127.0.0.1/tcp/' + Date.now()
  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)
  const res = await fc.config.set('api.address', data)

  t.deepEqual(res, data)
})

test('should throw for non stringifyable value', async t => {
  const fc = Filecoin()

  // Create object with circular reference
  const a = {}
  const b = {}
  a.toB = b
  b.toA = a

  const err = await t.throwsAsync(fc.config.set('api.address', a))

  t.is(err.message, 'failed to stringify config value')
})
