# filecoin-api-client

## Status

This repository is in a **frozen** state. It is not being maintained or kept in sync with the libraries it depends on. This library was designed for an early version of _go-filecoin_, which is now known as [Venus](https://venus.filecoin.io/). An API client for Lotus can be found at https://github.com/filecoin-shipyard/js-lotus-client-rpc. Even though work on this repository has been **shelved**, anyone interested in updating or maintaining this library should express their interest on one Filecoin community conversation mediums: <https://github.com/filecoin-project/community#join-the-community>.

---

[![CircleCI branch](https://img.shields.io/circleci/project/github/filecoin-shipyard/js-filecoin-api-client/master.svg)](https://circleci.com/gh/filecoin-shipyard/js-filecoin-api-client)
[![dependencies Status](https://david-dm.org/filecoin-shipyard/js-filecoin-api-client/status.svg)](https://david-dm.org/filecoin-shipyard/js-filecoin-api-client)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> An API client for Filecoin

⚠️ WARNING: Filecoin is under heavy development and breaking changes are highly likely between versions. This library is **experimental**, **incomplete** and **unsupported** by the Filecoin team. It may be broken in part or in entirety.

🧩 Currently compatible with **Filecoin 0.3.2**

## Install

```sh
npm i filecoin-api-client
```

## Usage

### Node.js

```js
const Filecoin = require('filecoin-api-client')

const fc = Filecoin({
  apiAddr: '/ip4/127.0.0.1/tcp/3453/http' // (optional, default)
})

// see API below for usage
```

### Browser

```html
<script src="https://unpkg.com/filecoin-api-client/dist/Filecoin.js"></script>
<script>
  const fc = Filecoin({
    apiAddr: '/ip4/127.0.0.1/tcp/3453/http' // (optional, default)
  })

  // see API below for usage
</script>
```

#### CORS

In a web browser, the Filecoin API client might encounter an error saying that the origin is not allowed. This is a CORS ("Cross Origin Resource Sharing") failure: Filecoin servers send HTTP headers allowing access to only certain origins by default. You can whitelist the origins that you are calling from by changing your Filecoin config like this:

```sh
$ filecoin config api.accessControlAllowOrigin '["http://example.com"]'
```

## API

* [actor.ls](API.md#actorls)
* [address.default](API.md#addressdefault)
* [address.lookup](API.md#addresslookup)
* [address.ls](API.md#addressls)
* [address.new](API.md#addressnew)
* [bootstrap.ls](API.md#bootstrapls)
* [chain.head](API.md#chainhead)
* [chain.ls](API.md#chainls)
* [client.cat](API.md#clientcat)
* [client.import](API.md#clientimport)
* [client.listAsks](API.md#clientlistasks)
* [client.payments](API.md#clientpayments)
* [client.proposeStorageDeal](API.md#clientproposestoragedeal)
* [client.queryStorageDeal](API.md#clientquerystoragedeal)
* [config.get](API.md#configget)
* [config.set](API.md#configset)
* [dag.get](API.md#dagget)
* [dht.findPeer](API.md#dhtfindpeer)
* [dht.findProvs](API.md#dhtfindprovs)
* dht.query
* [id](API.md#id)
* [log.level](API.md#loglevel)
* [log.ls](API.md#logls)
* [log.tail](API.md#logtail)
* message.send
* message.status
* [message.wait](API.md#messagewait)
* miner.addAsk
* [miner.create](API.md#minercreate)
* miner.owner
* miner.pledge
* miner.power
* miner.setPrice
* miner.updatePeerId
* mining.once
* mining.start
* [mining.stop](API.md#miningstop)
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
* [ping](API.md#ping)
* [retrievalClient.retrievePiece](API.md#retrievalclientretrievepiece)
* [show.block](API.md#showblock)
* [stats.bandwidth](API.md#statsbandwidth)
* [swarm.connect](API.md#swarmconnect)
* [swarm.peers](API.md#swarmpeers)
* [version](API.md#version)
* [wallet.balance](API.md#walletbalance)
* [wallet.export](API.md#walletexport)
* [wallet.import](API.md#walletimport)

Status: 35/57 **61%**

## Contribute

Feel free to dive in! [Open an issue](https://github.com/filecoin-shipyard/js-filecoin-api-client/issues/new) or submit PRs.

## License

The Filecoin Project is dual-licensed under Apache 2.0 and MIT terms:
- Apache License, Version 2.0, ([LICENSE-APACHE](https://github.com/filecoin-shipyard/js-filecoin-api-client/blob/master/LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](https://github.com/filecoin-shipyard/js-filecoin-api-client/blob/master/LICENSE-MIT) or http://opensource.org/licenses/MIT)
