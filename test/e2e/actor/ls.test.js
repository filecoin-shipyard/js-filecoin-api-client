const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should list actors', async t => {
  const fc = Filecoin()

  let actor
  for await (actor of fc.actor.ls()) break
  t.truthy(actor)
})
