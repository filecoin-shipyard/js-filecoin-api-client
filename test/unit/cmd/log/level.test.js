const test = require('ava')
const Filecoin = require('../../../../src')

test('should set the log level for all subsystems', async t => {
  const level = 'error'
  const expectedMessage = `Changed log level of all subsystems to: ${level}`
  const fetch = url => {
    url = new URL(url)
    t.is(url.searchParams.get('arg'), level)
    return { ok: true, json: () => expectedMessage }
  }
  const fc = Filecoin(fetch)

  const msg = await fc.log.level(level)
  t.is(msg, expectedMessage)
})

test('should set the log level for a specific subsystem', async t => {
  const level = 'error'
  const subsystem = 'ping'
  const expectedMessage = `Changed log level of '${subsystem}' to '${level}'`
  const fetch = url => {
    url = new URL(url)
    t.is(url.searchParams.get('arg'), level)
    t.is(url.searchParams.get('subsystem'), subsystem)
    return { ok: true, json: () => expectedMessage }
  }
  const fc = Filecoin(fetch)

  const msg = await fc.log.level(level, { subsystem })
  t.is(msg, expectedMessage)
})

test('should error for unknown log level', async t => {
  const level = 'foo'
  const expectedMessage = `'unknown log level: ${level}. Available levels: debug, info, warning, error, fatal, panic'`
  const fetch = url => {
    return { ok: false, text: () => JSON.stringify({ Message: expectedMessage }) }
  }
  const fc = Filecoin(fetch)

  const err = await t.throwsAsync(fc.log.level(level))
  t.is(err.message, expectedMessage)
})

test('should error for unknown subsystem', async t => {
  const level = 'error'
  const subsystem = 'foo'
  const expectedMessage = 'Error: No such logger'
  const fetch = url => {
    return { ok: false, text: () => JSON.stringify({ Message: expectedMessage }) }
  }
  const fc = Filecoin(fetch)

  const err = await t.throwsAsync(fc.log.level(level, { subsystem }))
  t.is(err.message, expectedMessage)
})
