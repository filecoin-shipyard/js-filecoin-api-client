# API

* [actor.ls](#actorls)
* [address.lookup](#addresslookup)
* [address.ls](#addressls)
* [address.new](#addressnew)
* [chain.head](#chainhead)
* [chain.ls](#chainls)
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
  code: { '/': 'zb2rhe71ud5XjA2RaFk2esBaQcD51EjKRLFP2yrB7Yq2WoiZ3' },
  nonce: 0,
  balance: '100',
  exports:
   { addAsk: [Object],
     commitSector: [Object],
     getKey: [Object],
     getLastUsedSectorID: [Object],
     getOwner: [Object],
     getPeerID: [Object],
     getPower: [Object],
     getProvingPeriodStart: [Object],
     submitPoSt: [Object],
     updatePeerID: [Object] },
  head:
   { '/': 'zDPWYqFCz4WFFjPuyyLRArmUhR4n1TibJTDoQLbivKaNg4JdDXCA' } }
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
