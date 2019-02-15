const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should list actors', async t => {
  const fc = Filecoin()

  for await (const actor of fc.actor.ls()) {
    t.truthy(actor)
  }
})
