const test = require('ava')
const Filecoin = require('../../../../src')

test('should propose a storage deal', async t => {
  const minerAddr = "t2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di"
  const cid = "QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6"
  const askId = "0"
  const time = "2880"

  const returnedStorageDeal = {
    "State":3,
    "Message":"",
    "ProposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "ProofInfo":null,
    "Signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const toCamelStorageDeal = {
    "state":3,
    "message":"",
    "proposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "proofInfo":null,
    "signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const fetch = () => ({ ok: true, json: () => returnedStorageDeal })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askId, time)

  t.deepEqual(res, toCamelStorageDeal)
})

test('should allow proposal of a storage deal with allowDuplicates flag', async t => {
  const minerAddr = "t2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di"
  const cid = "QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6"
  const askId = "0"
  const time = "2880"
  const options = { signal: "some signal", allowDuplicates: true }

  const returnedStorageDeal = {
    "State":3,
    "Message":"",
    "ProposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "ProofInfo":null,
    "Signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const toCamelStorageDeal = {
    "state":3,
    "message":"",
    "proposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "proofInfo":null,
    "signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const fetch = () => ({ ok: true, json: () => returnedStorageDeal })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askId, time, options)

  t.deepEqual(res, toCamelStorageDeal)
})
