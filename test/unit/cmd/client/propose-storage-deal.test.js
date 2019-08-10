const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./propose-storage-deal.fixtures.json')

test('should propose a storage deal', async t => {
  const minerAddr = 't2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di'
  const cid = 'QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6'
  const askId = '0'
  const time = '2880'

  const fetch = () => ({ ok: true, json: () => Fixtures.sample0 })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askId, time)

  t.deepEqual(res, {
    state: 3,
    message: '',
    proposalCid: 'zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5',
    proofInfo: null,
    signature: 'c2lnbmF0dXJycmVlZQ=='
  })
})

test('should allow proposal of a storage deal with allowDuplicates flag', async t => {
  const minerAddr = 't2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di'
  const cid = 'QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6'
  const askId = '0'
  const time = '2880'
  const options = { allowDuplicates: true }

  const fetch = () => ({ ok: true, json: () => Fixtures.sample0 })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askId, time, options)

  t.deepEqual(res, {
    state: 3,
    message: '',
    proposalCid: 'zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5',
    proofInfo: null,
    signature: 'c2lnbmF0dXJycmVlZQ=='
  })
})
