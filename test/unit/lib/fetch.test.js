const test = require('ava')
const { ok } = require('../../../src/lib/fetch')

test('should parse json error response', async t => {
  const res = {
    ok: false,
    json: () => Promise.resolve({
      Message: 'boom',
      Code: 0,
      Type: 'error'
    }),
    status: 500
  }

  const err = await t.throwsAsync(ok(res))

  t.is(err.message, 'boom')
  t.is(err.status, 500)
})

test('should fallback to text error response', async t => {
  const res = {
    ok: false,
    json: () => Promise.reject(new Error('failed to parse json')),
    text: () => 'boom',
    status: 500
  }

  const err = await t.throwsAsync(ok(res))

  t.is(err.message, 'boom')
  t.is(err.status, 500)
})
