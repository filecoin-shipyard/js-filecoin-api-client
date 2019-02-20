const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should set config value', async t => {
  const fc = Filecoin()

  const methods = await fc.config.get('api.accessControlAllowMethods')
  const nextMethods = methods.concat(`TEST${Date.now()}`)

  const res = await fc.config.set('api.accessControlAllowMethods', nextMethods)

  t.deepEqual(res, nextMethods)
  t.deepEqual(await fc.config.get('api.accessControlAllowMethods'), nextMethods)

  // Clean up!
  await fc.config.set('api.accessControlAllowMethods', methods)
})
