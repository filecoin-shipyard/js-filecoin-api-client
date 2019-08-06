const test = require('ava')
const Filecoin = require('../../../../src')

test('should list the storage deal info for a particular cid', async t => {
  const cid = "zDPWYqFCuTNxiwRkt1iDJWEy6qKPGCunMGHrP1ojsMrZDWKYsgzF"
  const storageDeal = {
    "State":7,
    "Message":"",
    "ProposalCid":
      {
        "/":"zDPWYqFD8CNXu7Mo9qPSUANbTK2vi9vJBnvavF9S1pVGPHafVHpT"
      },
    "ProofInfo":
      {
        "SectorID":1,
        "CommitmentMessage":
          {
            "/":"zDPWYqFCtHkWNkE2p6t6TeV1sPP5kbnKc5ajUhMVV8xvrw1u5F1R"
          },
        "PieceInclusionProof":"EiAbbOy4pChsCYqFYA6qJaUJYStlnwYMdQPHZX7YBkVXDD6vgmGTPnWrcdA9M0oAXQCzOq735YKySLUoTI6pAw=="
      },
    "Signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const fetch = () => ({ ok: true, json: () => storageDeal })
  const fc = Filecoin(fetch)

  const res = await fc.client.queryStorageDeal(cid)

  t.is(storageDeal, res)
})
