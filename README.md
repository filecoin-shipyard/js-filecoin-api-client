# filecoin-api-client

![CircleCI branch](https://img.shields.io/circleci/project/github/filecoin-project/js-filecoin-api-client/master.svg)
[![dependencies Status](https://david-dm.org/filecoin-project/js-filecoin-api-client/status.svg)](https://david-dm.org/filecoin-project/js-filecoin-api-client)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> An API client for Filecoin

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
* client.listAsks
* client.payments
* client.proposeStorageDeal
* client.queryStorageDeal
* [config.get](API.md#configget)
* [config.set](API.md#configset)
* dag.get
* [dht.findPeer](API.md#dhtfindpeer)
* [dht.findProvs](API.md#dhtfindprovs)
* dht.query
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
* mining.stop
* mpool.ls
* mpool.rm
* mpool.show
* [id](API.md#id)
* [log.level](API.md#loglevel)
* log.ls
* [log.tail](API.md#logtail)
* paych.close
* paych.create
* paych.extend
* paych.ls
* paych.reclaim
* paych.redeem
* paych.voucher
* [ping](API.md#ping)
* retrievalClient.retrievePiece
* [show.block](API.md#showblock)
* [stats.bandwidth](API.md#statsbandwidth)
* [swarm.connect](API.md#swarmconnect)
* [swarm.peers](API.md#swarmpeers)
* [version](API.md#version)
* [wallet.balance](API.md#walletbalance)
* [wallet.export](API.md#walletexport)
* wallet.import

Status: 24/57 **42%**

## Contribute

Feel free to dive in! [Open an issue](https://github.com/filecoin-project/js-filecoin-api-client/issues/new) or submit PRs.

## License

The Filecoin Project is dual-licensed under Apache 2.0 and MIT terms:
- Apache License, Version 2.0, ([LICENSE-APACHE](https://github.com/filecoin-project/js-filecoin-api-client/blob/master/LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](https://github.com/filecoin-project/js-filecoin-api-client/blob/master/LICENSE-MIT) or http://opensource.org/licenses/MIT)
