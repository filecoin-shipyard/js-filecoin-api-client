const test = require('ava')
const Filecoin = require('../../src')

test('should list actors', async t => {
  const fetch = () => ({ ok: true, text: () => '{}\n{}' })
  const fc = Filecoin(fetch, { apiAddr: '/ip4/127.0.0.1/tcp/3453/http' })

  for await (const actor of fc.actor.ls()) {
    t.truthy(actor)
  }
})

test('should throw on invalid actor', async t => {
  const fetch = () => ({ ok: true, text: () => '{}\n{' })
  const fc = Filecoin(fetch, { apiAddr: '/ip4/127.0.0.1/tcp/3453/http' })

  try {
    for await (const actor of fc.actor.ls()) {
      t.truthy(actor)
    }
  } catch (err) {
    return t.pass()
  }
  t.fail()
})

test('should throw on request error', async t => {
  const message = `BOOM${Date.now()}`
  const fetch = () => ({ ok: false, json: () => ({ message }) })
  const fc = Filecoin(fetch, { apiAddr: '/ip4/127.0.0.1/tcp/3453/http' })

  try {
    for await (const _ of fc.actor.ls()) { // eslint-disable-line
      t.fail()
    }
  } catch (err) {
    return t.is(err.message, message)
  }
  t.fail()
})
