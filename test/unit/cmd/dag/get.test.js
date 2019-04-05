const test = require('ava')
const Filecoin = require('../../../../src')
const Fixtures = require('./get.fixtures.json')

test('should get a DAG node', async t => {
  const fetch = url => {
    url = new URL(url)
    t.is(url.searchParams.get('arg'), Fixtures.sample0.cid)

    return {
      ok: true,
      headers: {
        get (key) { return this[key] },
        'Content-Type': 'application/json'
      },
      json: () => Fixtures.sample0.node
    }
  }

  const fc = Filecoin(fetch)
  const node = await fc.dag.get(Fixtures.sample0.cid)

  t.deepEqual(node, Fixtures.sample0.node)
})
