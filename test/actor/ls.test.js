const test = require('ava')
const CID = require('cids')
const Filecoin = require('../../src')

test('should list actors', async t => {
  const fetch = () => ({ ok: true, text: () => '{}\n{}' })
  const fc = Filecoin(fetch)

  for await (const actor of fc.actor.ls()) {
    t.truthy(actor)
  }
})

test('should throw on invalid actor', async t => {
  const fetch = () => ({ ok: true, text: () => '{}\n{' })
  const fc = Filecoin(fetch)

  try {
    for await (const actor of fc.actor.ls()) {
      t.truthy(actor)
    }
  } catch (err) {
    return t.pass()
  }
  t.fail()
})

test('should deserialize actor head CID', async t => {
  const expectedActors = [{
    head: { '/': 'zDPWYqFD8NrAiH9oxT3PT53TEMeZdkURTrHJXS6ymqqR1z9fCaVe' }
  }]
  const fetch = () => ({
    ok: true,
    text: () => expectedActors.map(a => JSON.stringify(a)).join('\n')
  })
  const fc = Filecoin(fetch)

  const actors = []
  for await (const actor of fc.actor.ls()) actors.push(actor)

  expectedActors.forEach((expectedActor, i) => {
    t.true(CID.isCID(actors[i].head))
    t.is(actors[i].head.toString(), expectedActor.head['/'])
  })
})

test('should deserialize actor code CID', async t => {
  const expectedActors = [{
    code: { '/': 'zb2rhe71ud5XjA2RaFk2esBaQcD51EjKRLFP2yrB7Yq2WoiZ3' }
  }]
  const fetch = () => ({
    ok: true,
    text: () => expectedActors.map(a => JSON.stringify(a)).join('\n')
  })
  const fc = Filecoin(fetch)

  const actors = []
  for await (const actor of fc.actor.ls()) actors.push(actor)

  expectedActors.forEach((expectedActor, i) => {
    t.true(CID.isCID(actors[i].code))
    t.is(actors[i].code.toString(), expectedActor.code['/'])
  })
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch)

  try {
    for await (const _ of fc.actor.ls()) { // eslint-disable-line
      t.fail()
    }
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
