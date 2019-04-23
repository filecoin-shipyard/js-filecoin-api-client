# API

* [actor.ls](#actorls)
* [address.default](#addressdefault)
* [address.lookup](#addresslookup)
* [address.ls](#addressls)
* [address.new](#addressnew)
* [bootstrap.ls](#bootstrapls)
* [chain.head](#chainhead)
* [chain.ls](#chainls)
* [client.cat](#clientcat)
* [client.import](#clientimport)
* [client.listAsks](#clientlistasks)
* client.payments
* client.proposeStorageDeal
* client.queryStorageDeal
* [config.get](#configget)
* [config.set](#configset)
* [dag.get](#dagget)
* [dht.findPeer](#dhtfindpeer)
* [dht.findProvs](#dhtfindprovs)
* dht.query
* [id](#id)
* [log.level](#loglevel)
* [log.ls](#logls)
* [log.tail](#logtail)
* message.send
* message.status
* message.wait
* miner.addAsk
* miner.create
* miner.owner
* miner.pledge
* miner.power
* miner.setPrice
* miner.updatePeerId
* mining.once
* mining.start
* [mining.stop](#miningstop)
* mpool.ls
* mpool.rm
* mpool.show
* paych.close
* paych.create
* paych.extend
* paych.ls
* paych.reclaim
* paych.redeem
* paych.voucher
* [ping](#ping)
* retrievalClient.retrievePiece
* [show.block](#showblock)
* [stats.bandwidth](#statsbandwidth)
* [swarm.connect](#swarmconnect)
* [swarm.peers](#swarmpeers)
* [version](#version)
* [wallet.balance](#walletbalance)
* [wallet.export](#walletexport)
* wallet.import

## `actor.ls`

> TODO describe actor.ls

### `actor.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Object>` | TODO describe return value |

#### Example

```js
for await (const actor of fc.actor.ls())
  console.log(actor)

/*
After first iteration:
{ actorType: 'MinerActor',
  address: 'fcqpdd3end3j5hhu7lacxg4vnluu9rxfd3nteezw6',
  code:
   CID {
     codec: 'raw',
     version: 1,
     multihash:
      <Buffer 12 20 6e db 35 14 a9 48 c5 1e 7e 0d cc 3f 86 bb 15 42 43 fa b4 54 86 f9 6d dc be bd d7 57 e6 37 35 26> },
  nonce: 0,
  balance: '100',
  exports:
   { addAsk: { Params: [Array], Return: [Array] },
     commitSector: { Params: [Array], Return: [] },
     getKey: { Params: [], Return: [Array] },
     getLastUsedSectorID: { Params: [], Return: [Array] },
     getOwner: { Params: [], Return: [Array] },
     getPeerID: { Params: [], Return: [Array] },
     getPower: { Params: [], Return: [Array] },
     getProvingPeriodStart: { Params: [], Return: [Array] },
     submitPoSt: { Params: [Array], Return: [] },
     updatePeerID: { Params: [Array], Return: [] } },
  head:
   CID {
     codec: 'dag-cbor',
     version: 1,
     multihash:
      <Buffer a0 e4 02 20 7c 25 c7 49 04 93 28 60 45 69 05 30 1f cd 10 ba d8 5d b6 85 b9 e1 37 7f 6e c5 2a 70 b8 cf 67 bf> } }
*/
```

## `address.default`

> Fetch the default address

### `address.default([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String>` | The default address |

#### Example

```js
const addr = await fc.address.default()
console.log(addr) // t1gwlbykvhfrkhrtll43ceiyzgggk7omnololcwpy
```

## `address.lookup`

> TODO describe address.lookup

### `address.lookup(addr, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| addr | `String` | Address to lookup peer ID for |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String>` | Peer ID for address |

## `address.ls`

> List address(es)

### `address.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String[]>` | Addresses |

#### Example

```js
const addresses = await fc.address.ls()
console.log(addresses) // [fcqyz3pgq7qpg0nekps597zth57x7xmh4sad7euk0]
```

## `address.new`

> TODO describe address.new

### `address.new([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String>` | A newly created address |

#### Example

```js
const addr = await fc.address.new()
console.log(addr) // fcq7kwnm7mqaynhngfl6qtp03p6jxmyda62zagfek
```

## `bootstrap.ls`

> TODO describe bootstrap.ls

### `bootstrap.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Multiaddr[]>` | List of bootstrap [multiaddrs](https://github.com/multiformats/js-multiaddr) |

#### Example

```js
const addrs = await fc.boostrap.ls()
console.log(addrs.map(a => a.toString()))

/*
[ '/dns4/test.kittyhawk.wtf/tcp/9001/ipfs/QmXq6XEYeEmUzBFuuKbVEGgxEpVD4xbSkG2Rhek6zkFMp4',
  '/dns4/test.kittyhawk.wtf/tcp/9002/ipfs/QmXhxqTKzBKHA5FcMuiKZv8YaMPwpbKGXHRVZcFB2DX9XY',
  '/dns4/test.kittyhawk.wtf/tcp/9003/ipfs/QmZGDLdQLUTi7uYTNavKwCd7SBc5KMfxzWxAyvqRQvwuiV',
  '/dns4/test.kittyhawk.wtf/tcp/9004/ipfs/QmZRnwmCjyNHgeNDiyT8mXRtGhP6uSzgHtrozc42crmVbg' ]
*/
```

## `chain.head`

> Get heaviest tipset CIDs

### `chain.head([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<CID[]>` | Array of [CID](https://github.com/ipld/js-cid/) objects |

#### Example

```js
const block = await fc.chain.head()
console.log(block.map(cid => cid.toString()))
// [ 'zDPWYqFCrhCRdGa1Z84DBpSQ5rrHphwjs7qHe5uS2LFurdnE6vvF' ]
```

## `chain.ls`

> Dump full block chain

### `chain.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Object[]>` | Iterable of blocks in the blockchain |

#### Example

```js
for await (const block of fc.chain.ls())
  console.log(block)

/*
After first iteration:
[ { miner: 'fcq5y65n23xdkcx2ymakflxpxqhkvewnwswp0me52',
    ticket: 'BNdhwXA6ty/KdYJ3YY/gZ1CexKRXsDYOpBq0wbK+/kA=',
    parents: [ [CID] ],
    parentWeightNumerator: 'y8q87bOQCQ==',
    parentWeightDenominator: 'xpSakwY=',
    height: '6hU=',
    nonce: 'AA==',
    messages: [ [Object] ],
    stateRoot:
     CID {
       codec: 'dag-cbor',
       version: 1,
       multihash:
        <Buffer 12 20 22 98 70 56 ae fd bd 3c 46 d9 8e 08 bf 62 8a fb 4e e3 81 73 6f 95 77 d4 48 ec e9 d6 16 a4 db ef> },
    messageReceipts: [ [Object] ] } ]
*/
```

## `client.cat`

> Read out data stored on the network

### `client.cat(cid, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| cid | `CID`\|`String` | CID of the content to read |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Buffer\|UInt8Array>` | Content of the file, yields `Buffer` objects in Node.js and `UInt8Array` objects in the browser |

#### Example

```js
let data = Buffer.alloc(0)
for await (const chunk of fc.client.cat('QmZPUUg1QVMciR1yYnC2HSFrXyAUwRvpnbx4haYefB2KY3'))
  data = Buffer.concat([data, chunk])
```

## `client.import`

> Import data into the local node

### `client.import(input, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| input | `Buffer`\|`String`\|`AsyncIterable`\|`TypedArray`\|`Blob` | Data to import. Note, `TypedArray` and `Blob` supported in browser only. |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<CID>` | CID of the imported content |

#### Example

From a buffer:

```js
const data = Buffer.from('Hello World!')
const cid = await fc.client.import(data)
```

From a Node.js stream (or async iterable):

```js
const data = fs.createReadStream('/path/to/file')
const cid = await fc.client.import(data)
```

## `client.listAsks`

> List all asks in the storage market

### `client.listAsks([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Object>` | Storage market asks |

#### Example

```js
for await (const ask of fc.client.listAsks())
  console.log(ask)

/*
After first iteration:
{ miner: 't2zup5a5rytwissvm6zq74amp4chrnazrl4ev4yii',
  price: '0.00000000000001',
  expiry: 33329,
  id: 4 }
*/
```

## `config.get`

> Get config values

### `config.get(key, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| key | `String` | Dot separated key to config value to retrieve |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise` | The current config value |

#### Example

```js
const value = await fc.config.get('bootstrap.addresses')
console.log(value)

/*
["/dns4/nightly.kittyhawk.wtf/tcp/9000/ipfs/Qmd6xrWYHsxivfakYRy6MszTpuAiEoFbgE1LWw4EvwBpp4",
  "/dns4/nightly.kittyhawk.wtf/tcp/9001/ipfs/QmXq6XEYeEmUzBFuuKbVEGgxEpVD4xbSkG2Rhek6zkFMp4",
  "/dns4/nightly.kittyhawk.wtf/tcp/9002/ipfs/QmXhxqTKzBKHA5FcMuiKZv8YaMPwpbKGXHRVZcFB2DX9XY",
  "/dns4/nightly.kittyhawk.wtf/tcp/9003/ipfs/QmZGDLdQLUTi7uYTNavKwCd7SBc5KMfxzWxAyvqRQvwuiV",
  "/dns4/nightly.kittyhawk.wtf/tcp/9004/ipfs/QmZRnwmCjyNHgeNDiyT8mXRtGhP6uSzgHtrozc42crmVbg']
*/
```

## `config.set`

> Set a config value

### `config.set(key, value, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| key | `String` | Dot separated key to config property name |
| value | `?` | Value to set for the config value (must be JSON stringifyable) |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise` | The set config value |

#### Example

```js
const value = await fc.config.set('api.address', '/ip4/127.0.0.1/tcp/3453')
console.log(value)

/*
/ip4/127.0.0.1/tcp/3453
*/
```

## `dag.get`

> Get a DAG node by its CID

### `dag.get(cid, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| cid | `CID`\|`String` | CID of the DAG node to get |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object\|Buffer\|Blob>` | The DAG node. If the server returns `Content-Type: 'application/json'` then the response is parsed into a JS object. Otherwise the raw `Buffer` (in Node.js) or `Blob` (in the browser) are returned. |

#### Example

```js
const UnixFs = require('ipfs-unixfs')
const input = Buffer.from('Hello World!')
const cid = await fc.client.import(input)
const node = await fc.dag.get(cid)
// Extract the raw data from the UnixFs DAG node
const output = UnixFs.unmarshal(Buffer.from(output.data, 'base64')).data
console.log(output.toString()) // Hello World!
```

## `dht.findPeer`

> Find a peer given a peerId.

### `dht.findPeer(peerId, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| peerId | `String` | ID of peer to find |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Multiaddr>` | Multiaddresses of a given peer. |

#### Example

```js
const peers = await fc.swarm.peers()
const peerId = peers[0].addr.getPeerId()

for await (const addr of fc.dht.findPeer(peerId))
  console.log(addr)

/*
[ <Multiaddr 04035ae6b006c34c - /ip4/3.90.230.176/tcp/49996>,
  <Multiaddr 04035ae6b006c2fd - /ip4/3.90.230.176/tcp/49917>,
  <Multiaddr 04035ae6b006e3be - /ip4/3.90.230.176/tcp/58302>,
  <Multiaddr 04035ae6b006232c - /ip4/3.90.230.176/tcp/9004>,
  <Multiaddr 04035ae6b006c2e1 - /ip4/3.90.230.176/tcp/49889>,
  <Multiaddr 04035ae6b006c2d0 - /ip4/3.90.230.176/tcp/49872>,
  <Multiaddr 04035ae6b006dfcc - /ip4/3.90.230.176/tcp/57292>,
  <Multiaddr 04ac13000e062328 - /ip4/172.19.0.14/tcp/9000>,
  <Multiaddr 04035ae6b006b461 - /ip4/3.90.230.176/tcp/46177>,
  <Multiaddr 047f000001062328 - /ip4/127.0.0.1/tcp/9000> ]
*/
```

## `dht.findProvs`

> Find peers that can provide a given key's value.

### `dht.findProvs(key, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| key | `String` | The key whose provider Peer IDs are output |
| options | `Object` | Optional options |
| options.numProviders | `Boolean` | The max number of providers to find. Default: 20 |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Object>` | Responses from peers documenting the providers that provide the value. |

#### Example

```js
for await (const res of fc.dht.findProvs('QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH'))
  console.log(res)

/*
Example iteration output:
{ type: 1,
  responses:
   [ { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] },
     { id: [CID], addrs: [Array] } ],
  id:
   CID {
     codec: 'dag-pb',
     version: 0,
     multihash:
      <Buffer 12 20 80 ac 25 a4 a1 64 ee 3f 84 13 d1 a3 a7 7b ab fc b8 eb ef 7f 98 99 81 28 e1 0b 00 9f da 99 7e f0> } }
*/
```

## `id`

> Get the identity of the Filecoin node

### `id([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<{ id<CID>, addresses<Multiaddr[]> }>` | TODO describe return value |

#### Example

```js
const { id, addresses } = await fc.id()
console.log({ id: id.toString(), addresses: addresses.map(a => a.toString()) })

/*
{ id: 'QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef',
  addresses:
   [ '/ip4/127.0.0.1/tcp/6000/ipfs/QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef',
     '/ip4/192.168.1.132/tcp/6000/ipfs/QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef' ] }
*/
```

## `log.level`

> Set the logging level for a subsystem or all subsystems

### `log.level(level, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| level | `String` | Log level to set. Available levels: debug, info, warning, error, fatal |
| options | `Object` | Optional options |
| options.subsystem | `String` | Subsystem to set the log level for. See [`log.ls`](#logls) for available subsystems |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String>` | Confirmation message |

#### Example

Set log level for all subsystems:

```js
const msg = await fc.log.level('debug')
console.log(msg) // "Changed log level of all subsystems to: debug"
```

Set log level for "ping" subsystem:

```js
const msg = await fc.log.level('debug', { subsystem: 'ping' })
console.log(msg) // "Changed log level of 'ping' to 'debug'"
```

## `log.ls`

> List the logging subsystems

### `log.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String[]>` | The available subsystems |

#### Example

```js
const subsystems = await fc.log.ls()
console.log(subsystems)

/*
[ 'commands/log',
  'fps',
  'net.bootstrap',
  'messageimpl',
  'peerstore',
  'swarm2',
  'dht.pb',
  'autorelay',
  'engine',
  'eventlog',
  'blockstore',
  'keystore',
  'transport',
  'types',
  'nat',
  'bstestnet',
  'sectorbuilder',
  '/fil/hello',
  'mplex',
  'addrutil',
  'cmds/http',
  'cmds/cli',
  'autonat-svc',
  'node',
  'metrics',
  'pubsub',
  'chain.store',
  'p2p-config',
  'basichost',
  'boguskey',
  'mocknet',
  'mockrouter',
  'routing/record',
  'providers',
  'reuseport-transport',
  'net/identify',
  'secio',
  'repo',
  'ping',
  'peerqueue',
  'pathresolv',
  'chain.syncer',
  'chunk',
  'bitswap_network',
  'lock',
  'stream-upgrader',
  'tcp-tpt',
  'relay',
  '/fil/retrieval',
  '/fil/storage',
  'cmds',
  'porcelain',
  'discovery',
  'table',
  'dht',
  'autonat',
  'routedhost',
  'bitswap',
  'blockservice',
  'consensus.expected',
  'mqueue',
  'mining' ]
*/
```

## `log.tail`

> Tail the logs

### `log.tail([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Object>` | Log entries |

#### Example

```js
for await (const entry of fc.log.tail())
  console.log(entry)
```

## `mining.stop`

> Stop mining operations

### `mining.stop([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String>` | Confirmation message |

#### Example

```js
const msg = await fc.mining.stop()
console.log(msg) // Stopped mining
```

## `ping`

> Send echo request packets to p2p network members

### `ping(peerId, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| peerId | `CID`\|`String` | ID of peer to be pinged |
| options | `Object` | Optional options |
| options.count | `Number` | Number of ping messages to send. Default: 10 |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<{ success<Boolean>, text<String>, time<Number> }>` | Async iterable of pong messages received by the node |

#### Example

```js
const peers = await fc.swarm.peers()
const peerId = peers[0].addr.getPeerId()

for await (const pong of fc.ping(peerId))
  console.log(pong)

/*
After first iteration:
{ success: true, text: '', time: 187.54 }
*/
```

## `show.block`

> Show a filecoin block by its CID

### `show.block(cid, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| cid | `CID`\|`String` | CID of block to show |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object>` | The blockchain block |

#### Example

```js
const block = await fc.show.block('zDPWYqFCutuHwRZhGXzji9L4eHeoFxxNCxCruGjWje36aAvbK2XV')
console.log(block)

/*
{ miner: '',
  ticket: null,
  parents: null,
  parentWeight: 'AA==',
  height: 'AA==',
  nonce: 'AA==',
  messages: null,
  stateRoot:
   CID {
     codec: 'dag-cbor',
     version: 1,
     multihash:
      <Buffer 12 20 14 7a 88 87 36 57 34 05 49 9d 46 d3 3e 7f fa 95 3e 36 9e 84 b3 8a c8 52 8f 99 7f fb f6 d9 de 84> },
  messageReceipts: null,
  proof:
   [ 0,
     0,
     0,
     0,
     0,
     0,
     ... 92 more items ] }
*/
```

## `stats.bandwidth`

> Get bandwidth usage statistics

### `stats.bandwidth([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object>` | Current bandwidth usage stats |

#### Example

```js
const stats = await fc.stats.bandwidth()
console.log(stats)

/*
{ totalIn: 7962607306,
  totalOut: 5437567180,
  rateIn: 1757169.0307054976,
  rateOut: 1066315.9253809578 }
*/
```

## `swarm.connect`

> Open a connection to a given address

### `swarm.connect(addr, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| addr | `String`\|`Multiaddr`\|`String[]`\|`Multiaddr[]` | Address(es) to connect to |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object[]>` | List of connection results |

#### Example

```js
const res = await fc.swarm.connect('/ip4/192.168.1.1/tcp/6000/ipfs/QmQbd6WxZ3pwcwWn21MvgH1zH4m8hk148kTfoB6BNFa5hK')
console.log(res.map(p => ({ ...p, peer: p.peer.toString() })))

/*
[ { peer: 'QmQbd6WxZ3pwcwWn21MvgH1zH4m8hk148kTfoB6BNFa5hK',
    success: true } ]
*/
```

## `swarm.peers`

> List peers with open connections

### `swarm.peers([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.latency | `Boolean` | Return information about latency for each peer |
| options.streams | `Boolean` | Return information about open streams for each peer |
| options.verbose | `Boolean` | Return all extra information |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object[]>` | List of peer info |

#### Example

```js
const peers = await fc.swarm.peers({ verbose: true })
console.log(peers.map(p => ({ ...p, addr: p.addr.toString() })))

/*
{ addr:
    '/ip4/67.180.60.249/tcp/35645/ipfs/QmNTS7MeGJYu4StMn1EmnV6XyX4JhxZPNrHrdcApLNk1YA',
   streams: [ { protocol: '/fil/hello/1.0.0' },
    { protocol: '/fil/hello/1.0.0' },
    { protocol: '/fil/kad/1.0.0' },
    { protocol: '/floodsub/1.0.0' },
    { protocol: '/floodsub/1.0.0' } ],
   latency: 'n/a',
   muxer: '' } ]
*/
```

## `version`

> Get the version of the Filecoin node

### `version([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object>` | TODO describe return value |

#### Example

```js
const version = await fc.version()
console.log(version)

/*
{ commit: '4e75ee9b601525c45eb255d80ccb73de35102c6d' }
*/
```

## `wallet.addrs.ls`

> Get the wallet address(es)

### `wallet.addrs.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String[]>` | TODO describe return value |

#### Example

```js
const addresses = await fc.wallet.addrs.ls()
console.log(addresses)

/*
['fcqu4uhfnuvwu4yf647lgatjftht5pyn44yxxfc5k']
*/
```

## `wallet.balance`

> Lookup the balance of a given wallet

### `wallet.balance(addr, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| addr | `String` | Address of wallet to lookup balance of |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String>` | Balance of the wallet |

#### Example

```js
const balance = await fc.wallet.balance('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')
console.log(balance) // 6900
```

## `wallet.export`

> Export key information for wallets

### `wallet.export(addr, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| addr | `String`\|`String[]` | Address(es) of wallet(s) to export |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object>` | Exported key info |

#### Example

Single:

```js
const info = await fc.wallet.export('fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e')
console.log(info)

/*
{
  keyInfo: [
    {
      privateKey: 'RxOfKlALxw8+XCaHQGaJfpXRWweYl+/xdIxVQfJTaTU=',
      curve: 'secp256k1'
    }
  ]
}
*/
```

Multiple:

```js
const info = await fc.wallet.export([
  'fcqqr00e38ge3vr90xx7x46gj7hq3dxcl09us08e',
  'fcq5y65n23xdkcx2ymakflxpxqhkvewnwswp0me52'
])
console.log(info)

/*
{
  keyInfo: [
    {
      privateKey: 'RxOfKlALxw8+XCaHQGaJfpXRWweYl+/xdIxVQfJTaTU=',
      curve: 'secp256k1'
    },
    {
      privateKey: 'rZ7hdys60Rk5+kab9ZuUJ87o6zLgyYgOqP1lHEAYgwo=',
      curve: 'secp256k1'
    }
  ]
}
*/
```
