# API

* [actor.ls](#actorls)
* [address.lookup](#addresslookup)
* [address.ls](#addressls)
* [address.new](#addressnew)
* [chain.head](#chainhead)
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
const heads = await fc.chain.head()
console.log(heads.map(cid => cid.toString()))
// [ 'zDPWYqFCrhCRdGa1Z84DBpSQ5rrHphwjs7qHe5uS2LFurdnE6vvF' ]
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
