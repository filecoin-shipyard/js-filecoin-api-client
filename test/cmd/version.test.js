const test = require('ava')
const Filecoin = require('../../src')

test('should get version', async t => {
  const commit = '4e75ee9b601525c45eb255d80ccb73de35102c6d'
  const fetch = () => ({ ok: true, json: () => ({ Commit: commit }) })
  const fc = Filecoin(fetch)
  const res = await fc.version()

  t.is(res.commit, commit)
})
