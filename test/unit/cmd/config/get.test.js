const test = require('ava')
const Filecoin = require('../../../../src')

test('should get config value', async t => {
  const data = {
    address: '/ip4/127.0.0.1/tcp/3453',
    accessControlAllowOrigin: ['*'],
    accessControlAllowCredentials: false,
    accessControlAllowMethods: ['GET', 'POST', 'PUT']
  }
  const fetch = () => ({ ok: true, json: () => data })
  const fc = Filecoin(fetch)
  const res = await fc.config.get('api')

  t.deepEqual(res, data)
})
