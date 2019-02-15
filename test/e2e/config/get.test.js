const test = require('ava')
const Multiaddr = require('multiaddr')
const Filecoin = require('../helpers/filecoin')

test('should get config value', async t => {
  const fc = Filecoin()
  const res = await fc.config.get('bootstrap.addresses')

  t.true(Array.isArray(res))
  res.forEach(addr => t.notThrows(() => Multiaddr(addr)))
})
