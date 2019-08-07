const test = require('ava')
const Filecoin = require('../../../../src')

test('should propose a storage deal', async t => {
  const minerAddr = "t2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di"
  const cid = "QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6"
  const askID = "0"
  const time = "2880"

  const newStorageDeal = {
    "State":3,
    "Message":"",
    "ProposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "ProofInfo":null,
    "Signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const fetch = () => ({ ok: true, json: () => newStorageDeal })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askID, time)

  t.is(res, newStorageDeal)
})

test('should allow proposal of a storage deal with allowDuplicates flag', async t => {
  const minerAddr = "t2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di"
  const cid = "QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6"
  const askID = "0"
  const time = "2880"
  const allowDuplicates = true
  const options = { signal: "some signal" }

  const newStorageDeal = {
    "State":3,
    "Message":"",
    "ProposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "ProofInfo":null,
    "Signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const fetch = () => ({ ok: true, json: () => newStorageDeal })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askID, time, { allowDuplicates: allowDuplicates }, options)

  t.is(res, newStorageDeal)
})

test('should handle proposing a storage deal with options and no allowDuplicates flag', async t => {
  const minerAddr = "t2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di"
  const cid = "QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6"
  const askID = "0"
  const time = "2880"
  const options = { signal: "some signal" }

  const newStorageDeal = {
    "State":3,
    "Message":"",
    "ProposalCid":
      {
        "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
      },
    "ProofInfo":null,
    "Signature":"c2lnbmF0dXJycmVlZQ=="
  }

  const fetch = () => ({ ok: true, json: () => newStorageDeal })
  const fc = Filecoin(fetch)

  const res = await fc.client.proposeStorageDeal(minerAddr, cid, askID, time, options)

  t.is(res, newStorageDeal)
})
