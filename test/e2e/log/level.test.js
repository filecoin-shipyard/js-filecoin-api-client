const test = require('ava')
const Filecoin = require('../helpers/filecoin')

test('should set the log level for all subsystems', async t => {
  const fc = Filecoin()

  let res
  res = await fc.log.level('error')
  t.is(res, 'Changed log level of all subsystems to: error')

  res = await fc.log.level('warning')
  t.is(res, 'Changed log level of all subsystems to: warning')

  res = await fc.log.level('info')
  t.is(res, 'Changed log level of all subsystems to: info')
})

test('should set the log level for a specific subsystem', async t => {
  const fc = Filecoin()

  let res
  res = await fc.log.level('error', { subsystem: 'ping' })
  t.is(res, 'Changed log level of \'ping\' to \'error\'')

  res = await fc.log.level('warning', { subsystem: 'ping' })
  t.is(res, 'Changed log level of \'ping\' to \'warning\'')

  res = await fc.log.level('info', { subsystem: 'ping' })
  t.is(res, 'Changed log level of \'ping\' to \'info\'')
})

test('should error for unknown log level', async t => {
  const fc = Filecoin()
  const err = await t.throwsAsync(fc.log.level('foo'))
  t.is(err.message, 'unknown log level: foo. Available levels: debug, info, warning, error, fatal, panic')
})

test('should error for unknown subsystem', async t => {
  const fc = Filecoin()
  const err = await t.throwsAsync(fc.log.level('info', { subsystem: 'foo' }))
  t.is(err.message, 'Error: No such logger')
})
