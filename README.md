# filecoin-api-client

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
* [address.lookup](API.md#addresslookup)
* [address.ls](API.md#addressls)
* [address.new](API.md#addressnew)
* [bootstrap.ls](API.md#bootstrapls)
* [chain.head](API.md#chainhead)
* [chain.ls](API.md#chainls)
* [client.cat](API.md#clientcat)
* [client.import](API.md#clientimport)
* [config.get](API.md#configget)
* [config.set](API.md#configset)
* [id](API.md#id)
* [log.tail](API.md#logtail)
* [swarm.connect](API.md#swarmconnect)
* [swarm.peers](API.md#swarmpeers)
* [version](API.md#version)
* [wallet.addrs.ls](API.md#walletaddrsls)
* [wallet.balance](API.md#walletbalance)
* TODO: more to come in upcoming releases!

## Contribute

Feel free to dive in! [Open an issue](https://github.com/filecoin-project/js-filecoin-api-client/issues/new) or submit PRs.

## License

The Filecoin Project is dual-licensed under Apache 2.0 and MIT terms:
- Apache License, Version 2.0, ([LICENSE-APACHE](https://github.com/filecoin-project/js-filecoin-api-client/blob/master/LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](https://github.com/filecoin-project/js-filecoin-api-client/blob/master/LICENSE-MIT) or http://opensource.org/licenses/MIT)
