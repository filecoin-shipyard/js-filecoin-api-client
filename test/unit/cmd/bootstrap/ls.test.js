const test = require('ava')
const Filecoin = require('../../../../src')

test('should list bootstrap node addresses', async t => {
  const expectedAddrs = [
    '/dns4/test.kittyhawk.wtf/tcp/9001/ipfs/QmXq6XEYeEmUzBFuuKbVEGgxEpVD4xbSkG2Rhek6zkFMp4',
    '/dns4/test.kittyhawk.wtf/tcp/9002/ipfs/QmXhxqTKzBKHA5FcMuiKZv8YaMPwpbKGXHRVZcFB2DX9XY',
    '/dns4/test.kittyhawk.wtf/tcp/9003/ipfs/QmZGDLdQLUTi7uYTNavKwCd7SBc5KMfxzWxAyvqRQvwuiV',
    '/dns4/test.kittyhawk.wtf/tcp/9004/ipfs/QmZRnwmCjyNHgeNDiyT8mXRtGhP6uSzgHtrozc42crmVbg'
  ]
  const fetch = () => ({ ok: true, json: () => ({ Peers: expectedAddrs }) })
  const fc = Filecoin(fetch)

  const addrs = await fc.bootstrap.ls()
  t.is(addrs, expectedAddrs)
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    await fc.bootstrap.ls()
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
