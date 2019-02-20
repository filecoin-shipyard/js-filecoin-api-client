# API

* [actor.ls](#actorls)
* [address.lookup](#addresslookup)
* [address.ls](#addressls)
* [address.new](#addressnew)
* [bootstrap.ls](#bootstrapls)
* [chain.head](#chainhead)
* [chain.ls](#chainls)
* [config.get](#configget)
* [config.set](#configset)
* [id](#id)
* [swarm.connect](#swarmconnect)
* [swarm.peers](#swarmpeers)
* [version](#version)
* [wallet.addrs.ls](API.md#walletaddrsls)
* [wallet.balance](#walletbalance)
* TODO: more to come in upcoming releases!

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

> List miner address(es)

### `address.ls([options])`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| options | `Object` | Optional options |
| options.signal | [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) | A signal that can be used to abort the request |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<String[]>` | Miner addresses |

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
console.log({ id: id.toStrng(), addresses: addresses.map(a => a.toString()) })

/*
{ id: 'QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef',
  addresses:
   [ '/ip4/127.0.0.1/tcp/6000/ipfs/QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef',
     '/ip4/192.168.1.132/tcp/6000/ipfs/QmVESp5X5EtRXGrDBqHzZ1Hd22nSh5QLtw8BozGNu9dWef' ] }
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
