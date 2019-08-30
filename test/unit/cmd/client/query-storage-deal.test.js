const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./query-storage-deal.fixtures.json')

test('should list the storage deal info for a particular cid', async t => {
  const cid = 'zDPWYqFCuTNxiwRkt1iDJWEy6qKPGCunMGHrP1ojsMrZDWKYsgzF'

  const fetch = () => ({ ok: true, json: () => Fixtures })
  const fc = Filecoin(fetch)

  const res = await fc.client.queryStorageDeal(cid)

  const proofInfo = {
    sectorID: 1,
    commitmentMessage: 'zDPWYqFCtHkWNkE2p6t6TeV1sPP5kbnKc5ajUhMVV8xvrw1u5F1R',
    pieceInclusionProof: 'EiAbbOy4pChsCYqFYA6qJaUJYStlnwYMdQPHZX7YBkVXDD6vgmGTPnWrcdA9M0oAXQCzOq735YKySLUoTI6pAw=='
  }

  t.deepEqual(res, {
    state: 7,
    message: '',
    proposalCid: 'zDPWYqFD8CNXu7Mo9qPSUANbTK2vi9vJBnvavF9S1pVGPHafVHpT',
    proofInfo: proofInfo,
    signature: 'c2lnbmF0dXJycmVlZQ=='
  })
})
