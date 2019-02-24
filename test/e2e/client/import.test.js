const test = require('ava')
const { randomBytes } = require('crypto')
const Filecoin = require('../helpers/filecoin')

test('should import a buffer', async t => {
  const fc = Filecoin()
  const data = randomBytes(256)

  const res = await fc.client.import(data)
  console.log(res)
})
