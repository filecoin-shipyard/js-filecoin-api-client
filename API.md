# API

* [actor.ls](#actorls)
* [address.lookup](#addresslookup)
* [address.ls](#addressls)
* [address.new](#addressnew)
* [bootstrap.ls](#bootstrapls)
* [chain.head](#chainhead)
* [chain.ls](#chainls)
* [version](#version)
* [wallet.addrs.ls](API.md#walletaddrsls)
* [wallet.balance](#walletbalance)
* TODO: more to come in upcoming releases!

## `actor.ls`

> TODO describe actor.ls

### `actor.ls()`

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Actor>` | TODO describe return value |

#### Example

```js
for await (const actor of fc.actor.ls())
  console.log(actor)

/*
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

### `address.lookup(addr)`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| addr | `String` | Address to lookup peer ID for |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Error, String>` | Peer ID for address |

## `address.ls`

> TODO describe address.ls

### `address.ls()`

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<String>` | Iterable of addresses |

#### Example

```js
for await (const addr of fc.address.ls())
  console.log(addr) // fcqyz3pgq7qpg0nekps597zth57x7xmh4sad7euk0
```

## `address.new`

> TODO describe address.new

### `address.new()`

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Error, String>` | A newly created address |

#### Example

```js
const addr = await fc.address.new()
console.log(addr) // fcq7kwnm7mqaynhngfl6qtp03p6jxmyda62zagfek
```

## `bootstrap.ls`

> TODO describe bootstrap.ls

### `bootstrap.ls()`

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Error, String[]>` | List of bootstrap multiaddrs |

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

### `chain.head()`

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Error, CID[]>` | Array of [CID](https://github.com/ipld/js-cid/) objects |

#### Example

```js
const block = await fc.chain.head()
console.log(block.map(cid => cid.toString()))
// [ 'zDPWYqFCrhCRdGa1Z84DBpSQ5rrHphwjs7qHe5uS2LFurdnE6vvF' ]
```

## `chain.ls`

> Dump full block chain

### `chain.ls()`

#### Returns

| Type | Description |
|------|-------------|
| `AsyncIterable<Array<???>>` | Iterable of blocks in the blockchain |

#### Example

```js
for await (const block of fc.chain.ls())
  console.log(block)

/*
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

## `version`

> Get the version of the Filecoin node

### `version()`

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

### `wallet.addrs.ls()`

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Object>` | TODO describe return value |

#### Example

```js
const res = await fc.wallet.addrs.ls()
console.log(res)

/*
{ addresses: ['fcqu4uhfnuvwu4yf647lgatjftht5pyn44yxxfc5k'] }
*/
```

## `wallet.balance`

> Lookup the balance of a given wallet

### `wallet.balance(addr)`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| addr | `String` | Address of wallet to lookup balance of |

#### Returns

| Type | Description |
|------|-------------|
| `Promise<Error, String>` | Balance of the wallet |

#### Example

```js
const balance = await fc.wallet.balance()
console.log(balance) // 6900
```
