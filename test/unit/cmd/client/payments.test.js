const test = require('ava')
const CID = require('cids')
const Filecoin = require('../../../../src')

test('should list payments for a given deal', async t => {
  const cid = "zDPWYqFCuTNxiwRkt1iDJWEy6qKPGCunMGHrP1ojsMrZDWKYsgzF"
  const payments = [
    {
      "channel":0,
      "payer":"t1bcvxo4ztdkukjmrsjvc5d4w24cl55vvbrssspyy",
      "target":"t1uo4nzu44apoclkbjbbvc4f3irbptg3ctjq44wiq",
      "amount":"25000",
      "valid_at":8,
      "condition":null,
      "signature":"1My76149fPIulbdO/DKlkUBMMSLwGYSw2XmVKXq3HrxMG5kkmBgsaPZ/DzdxiOWX5kdnXJ++AFQqsmWHd5dtOwE="
    }
  ]

  const fetch = () => ({ ok: true, json: () => payments })
  const fc = Filecoin(fetch)

  const res = await fc.client.payments(cid)

  t.true(Array.isArray(res))

})
