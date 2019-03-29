const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./export.fixtures.json')

test('should export a wallet', async t => {
  const fetch = () => ({ ok: true, json: () => Fixtures.single })
  const fc = Filecoin(fetch)
  const data = await fc.wallet.export('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')

  t.deepEqual(data.keyInfo, Fixtures.single.KeyInfo)
})

test('should export multiple wallets', async t => {
  const fetch = () => ({ ok: true, json: () => Fixtures.multiple })
  const fc = Filecoin(fetch)
  const data = await fc.wallet.export([
    'fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e',
    't1birbw25eb545u6sty7j3562a753asg6woufhogq',
    't1cybcewm7emhrrcu6gbp63yoehotrjdt4xhvu37y'
  ])

  t.deepEqual(data.keyInfo, Fixtures.multiple.KeyInfo)
})
