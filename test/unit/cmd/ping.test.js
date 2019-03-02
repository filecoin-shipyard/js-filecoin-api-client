const test = require('ava')
const Filecoin = require('../../../src')
const { toAsyncIterable } = require('../../helpers/iterable')

test('should ping a peer', async t => {
  const pingResponses = [
    { Success: true, Text: '', Time: 187.54 },
    { Success: true, Text: '', Time: 173.06 },
    { Success: true, Text: '', Time: 182.41 }
  ]

  const fetch = () => ({
    ok: true,
    body: toAsyncIterable(pingResponses.map(r => JSON.stringify(r) + '\n'))
  })
  const fc = Filecoin(fetch)
  const peerId = 'QmYWJ4Ft1Rd6RctWjgPJFVwd9QGs5J2Gi3LiXp3C8Kp81C'

  let i = 0
  for await (const pong of fc.ping(peerId)) {
    t.is(pong.success, pingResponses[i].Success)
    t.is(pong.text, pingResponses[i].Text)
    t.is(pong.time, pingResponses[i].Time)
    i++
  }
})

test('should ping a peer with count option', async t => {
  const pingResponses = [
    { Success: true, Text: '', Time: 187.54 },
    { Success: true, Text: '', Time: 173.06 },
    { Success: true, Text: '', Time: 182.41 }
  ]

  const fetch = url => {
    const count = parseInt(new URL(url).searchParams.get('count'))
    const responses = pingResponses.slice(0, count).map(r => JSON.stringify(r) + '\n')
    return {
      ok: true,
      body: toAsyncIterable(responses)
    }
  }
  const fc = Filecoin(fetch)
  const peerId = 'QmYWJ4Ft1Rd6RctWjgPJFVwd9QGs5J2Gi3LiXp3C8Kp81C'
  const count = 2

  let i = 0
  for await (const pong of fc.ping(peerId, { count })) {
    t.is(pong.success, pingResponses[i].Success)
    t.is(pong.text, pingResponses[i].Text)
    t.is(pong.time, pingResponses[i].Time)
    i++
  }

  t.is(i, count)
})
