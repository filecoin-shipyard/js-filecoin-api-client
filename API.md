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
* [client.payments](#clientpayments)
* [client.proposeStorageDeal](#clientproposestoragedeal)
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
* [message.wait](#messagewait)
* miner.addAsk
* [miner.create](#minercreate)
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
* [retrievalClient.retrievePiece](#retrievalclientretrievepiece)
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
  code: 'zb2rhmciMRS4PBXYBBHssphYKQrbFujVjj1SMyUyN2bU2SKFx',
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
  head: 'zDPWYqFD5LSWY8NQR7hWtLU8arYBw6W9eXZ1VvWjzh8YUJfAshx4'
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
| `Promise<String[]>` | List of bootstrap [multiaddrs](https://github.com/multiformats/js-multiaddr) |

#### Example

```js
const addrs = await fc.boostrap.ls()
console.log(addrs)

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
| `Promise<String[]>` | Array of String CIDs |

#### Example

```js
const block = await fc.chain.head()
console.log(block)
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
    parents: [ [String] ],
    parentWeightNumerator: 'y8q87bOQCQ==',
    parentWeightDenominator: 'xpSakwY=',
    height: '6hU=',
    nonce: 'AA==',
    messages: [ [Object] ],
    stateRoot: 'zDPWYqFD5LSWY8NQR7hWtLU8arYBw6W9eXZ1VvWjzh8YUJfAshx4',
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
| `Promise<String>` | CID of the imported content |

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

## `client.payments`

> List payments for a given deal

### `client.payments(dealCid, [options])`
#### Parameters

| Name | Type | Description |
|------|------|-------------|
| dealCid | `CID`\|`String` | Channel id from which to list vouchers |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns
| Type | Description |
|------|-------------|
| `Promise<Object[]>` | List of payments |

#### Example

```js
const cid = 'zDPWYqFCuTNxiwRkt1iDJWEy6qKPGCunMGHrP1ojsMrZDWKYsgzF'
const payments = await fc.client.payments(cid)
console.log(payments)

/*
  [
    {
      "channel": 0,
      "payer": "t1bcvxo4ztdkukjmrsjvc5d4w24cl55vvbrssspyy",
      "target": "t1uo4nzu44apoclkbjbbvc4f3irbptg3ctjq44wiq",
      "amount": "25000",
      "validAt": 8,
      "condition": null,
      "signature": "1My76149fPIulbdO/DKlkUBMMSLwGYSw2XmVKXq3HrxMG5kkmBgsaPZ/DzdxiOWX5kdnXJ++AFQqsmWHd5dtOwE="
    }
  ]
*/
```


## `client.proposeStorageDeal`

> Propose a storage deal with a storage miner

### `client.proposeStorageDeal(miner, cid, askID, time, allowDuplicates, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| miner | `String` | Address of miner to send storage proposal |
| cid | `String` | CID of the data to be stored |
| id | `String` | ID of ask for which to propose a deal |
| time | `String` | Time in blocks (about 30 seconds per block) to store data. For example, storing for 1 day (2 blocks/min * 60 min/hr * 24 hr/day) = 2880 blocks. |
| options | `Object` | Optional options |
| options.allowDuplicates | `Boolean` | Allows duplicate proposals to be created. Unless this flag is set, you will not be able to make more than one deal per piece per miner. This protection exists to prevent erroneous duplicate deals. This parameter is not required. |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns
| Type | Description |
|------|-------------|
| `Promise<Object>` | Storage deal |


#### Example

From a buffer:

```js
const miner = "t2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di"
const cid = "QmV9mkND7mvWim77R669UCLg1DgYzqiX1NsXtj7GSydzD6"
const askId = "0"
const time = "2800" // 1 day

const storageDealProposal = await fc.client.proposeStorageDeal(miner, cid, askId, time)

// with optional flag to allow duplicates
const storageDealProposal = await fc.client.proposeStorageDeal(miner, cid, askId, time, { allowDuplicates: true })

/*
{
  "State":3,
  "Message":"",
  "ProposalCid":
    {
      "/":"zDPWYqFCz8vQRUnFVsbdXPAWTRuRBLaPncKLLSqd7cNF3Bd2NQT5"
    },
  "ProofInfo":null,
  "Signature":"c2lnbmF0dXJycmVlZQ=="
}
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
| `AsyncIterable<String>` | Multiaddresses of a given peer. |

#### Example

```js
const peers = await fc.swarm.peers()
const peerId = peers[0].addr.getPeerId()

for await (const addr of fc.dht.findPeer(peerId))
  console.log(addr)

/*
[ '/ip4/3.90.230.176/tcp/49996',
  '/ip4/3.90.230.176/tcp/49917',
  '/ip4/3.90.230.176/tcp/58302',
  '/ip4/3.90.230.176/tcp/9004',
  '/ip4/3.90.230.176/tcp/49889',
  '/ip4/3.90.230.176/tcp/49872',
  '/ip4/3.90.230.176/tcp/57292',
  '/ip4/172.19.0.14/tcp/9000',
  '/ip4/3.90.230.176/tcp/46177',
  '/ip4/127.0.0.1/tcp/9000'
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
   [ { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] },
     { id: [String], addrs: [Array] } ],
  id: 'QmRCrwBopruk3dihfu9njyZ2J88VvCJG4JEnmhNku47RCR'
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
| `Promise<{ id<String>, addresses<String[]> }>` | TODO describe return value |

#### Example

```js
const { id, addresses } = await fc.id()
console.log({ id, addresses })

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

## `message.wait`

> Wait for a message to appear in a mined block

### `message.wait(messageCid, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| messageCid | `CID`\|`String` | CID of the message to wait for |
| options | `Object` | Optional options |
| options.message | `Boolean` | Print the whole message. Default: true. |
| options.receipt | `Boolean` | Print the whole message receipt. Default: true. |
| options.return | `Boolean` | Print the return value from the receipt. Default: false. |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |
| options.timeout | `String` | Maximum time to wait for message. e.g., 300ms, 1.5h, 2h45m. Default: 10m. |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object>` | Message contents |

#### Example

```js
const msg = await fc.message.wait('zdpuAm8mTU17dB5mckEDSNXFtvuxVESUhKivSLCWw1kMZjdK9')
```

## `miner.create`

> Create a new file miner with <collateral> FIL
>
> Issues a new message to the network to create the miner, then waits for the message to be mined as this is required to return the address of the new miner.
>
> Collateral will be committed at the rate of 0.001FIL per sector. When the miner's collateral drops below 0.001FIL, the miner will not be able to commit additional sectors.

### `miner.create(collateral, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| collateral | `Number`\|`String` | The amount of collateral, in FIL. |
| options | `Object` | Optional options |
| options.sectorSize | `String` | Size of the sectors which this miner will commit, in bytes. |
| options.from | `String` | Address to send from |
| options.peerId | `String` | Base58-encoded libp2p peer ID that the miner will operate. |
| options.gasPrice | `Number`\|`String` | Price (FIL e.g. 0.00013) to pay for each GasUnits consumed mining this message. |
| options.gasLimit | `Number`\|`String` | Maximum number of GasUnits this message is allowed to consume. |
| options.preview | `Boolean` | Preview the Gas cost of this command without actually executing it. |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<?>` | TODO |

#### Example

```js
const res = await fc.miner.create(100, {
  gasPrice: 0.1,
  gasLimit: 300,
  from: 't1afotrik6r7s4mcm5oeay6vc7qombbxjqplkw4ka'
})

console.log(res)
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

## `retrievalClient.retrievePiece`

> Read out piece data stored by a miner on the network

### `retrievalClient.retrievePiece(miner, cid, [options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| miner | `String` | Retrieval miner actor address |
| cid | `CID`\|`String` | Content identifier of piece to read |
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Buffer\|UInt8Array>` | Content of the file, yields `Buffer` objects in Node.js and `UInt8Array` objects in the browser |

#### Example

```js
const pieceData = fc.retrievalClient.retrievePiece(
  't2u2r6nyaxdspozci5t2i2xtfw23lxa35rvkul7di',
  'QmSB6t4fVfE4fZ46EFBodtK89RJaCRTtPRaEYFx8EQxh8a'
)

let data = Buffer.alloc(0)
for await (const chunk of pieceData)
  data = Buffer.concat([data, chunk])
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
  parents: 'zDPWYqFCtf5awkxnZbpurnQFvsrafnv4nJbP8UkAHD8GCf8T2Sz4',
  parentWeight: 'AA==',
  height: 'AA==',
  nonce: 'AA==',
  messages: null,
  stateRoot: 'zdpuAm8mTU17dB5mckEDSNXFtvuxVESUhKivSLCWw1kMZjdK9',
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
console.log(res)

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
