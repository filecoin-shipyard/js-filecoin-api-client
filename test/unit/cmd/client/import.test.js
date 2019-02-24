const test = require('ava')
const { randomBytes } = require('crypto')
const CID = require('cids')
const Filecoin = require('../../../../src')
const { toAsyncIterable } = require('../../../helpers/iterable')

test('should import a buffer', async t => {
  const input = randomBytes(256)

  const res = { '/': 'QmPrUbJdyPsLxkwENZNFm6Xn95oXSiUbHvaBBRVSn2PrJV' }
  const fetch = () => ({ ok: true, json: () => res })
  const fc = Filecoin(fetch)

  const cid = await fc.client.import(input)

  t.true(CID.isCID(cid))
  t.is(cid.toString(), res['/'])
})

test('should import a string', async t => {
  const input = randomBytes(256).toString('hex')

  const res = { '/': 'QmPrUbJdyPsLxkwENZNFm6Xn95oXSiUbHvaBBRVSn2PrJV' }
  const fetch = () => ({ ok: true, json: () => res })
  const fc = Filecoin(fetch)

  const cid = await fc.client.import(input)

  t.true(CID.isCID(cid))
  t.is(cid.toString(), res['/'])
})

test('should import an async iterable', async t => {
  const input = [randomBytes(256), randomBytes(32), randomBytes(512)]

  const res = { '/': 'QmPrUbJdyPsLxkwENZNFm6Xn95oXSiUbHvaBBRVSn2PrJV' }
  const fetch = () => ({ ok: true, json: () => res })
  const fc = Filecoin(fetch)

  const cid = await fc.client.import(toAsyncIterable(input))
  t.true(CID.isCID(cid))
  t.is(cid.toString(), res['/'])
})
