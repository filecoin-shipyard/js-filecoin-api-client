const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./query-storage-deal.fixtures.json')

test('should list the storage deal info for a particular cid', async t => {
  const cid = 'zDPWYqFCuTNxiwRkt1iDJWEy6qKPGCunMGHrP1ojsMrZDWKYsgzF'

  const fetch = () => ({ ok: true, json: () => Fixtures })
  const fc = Filecoin(fetch)

  const res = await fc.client.queryStorageDeal(cid)

  const responseProofInfo = Fixtures['ProofInfo']

  const proofInfo = {
    sectorID: responseProofInfo['SectorID'],
    commitmentMessage: responseProofInfo['CommitmentMessage']['/'],
    commD: responseProofInfo['CommD'],
    commR: responseProofInfo['CommR'],
    commRStar: responseProofInfo['CommRStar'],
    pieceInclusionProof: responseProofInfo['PieceInclusionProof']
  }

  t.deepEqual(res, {
    state: 7,
    message: '',
    proposalCid: Fixtures['ProposalCid']['/'],
    proofInfo: proofInfo,
    signature: Fixtures['Signature']
  })
})
