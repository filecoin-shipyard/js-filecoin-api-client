# filecoin-api

> An API client for Filecoin

## Install

```sh
npm i filecoin-api@filecoin-project/js-filecoin-api
```

## Usage

### Node.js

```js
const Filecoin = require('filecoin-api')

const fc = Filecoin({
  apiAddr: '/ip4/127.0.0.1/tcp/3453/http' // (optional, default)
})

// see API below for usage
```

### Browser

```html
<script src="https://unpkg.com/filecoin-api/dist/FilecoinApi.js"></script>
<script>
  const fc = FilecoinApi({
    apiAddr: '/ip4/127.0.0.1/tcp/3453/http' // (optional, default)
  })

  // see API below for usage
</script>
```

## API

* [actor.ls](API.md#actorls)
* [address.lookup](API.md#addresslookup)
* [address.ls](API.md#addressls)
* [address.new](API.md#addressnew)
* [bootstrap.ls](API.md#bootstrapls)
* [chain.head](API.md#chainhead)
* [chain.ls](API.md#chainls)
* [id](API.md#id)
* [version](API.md#version)
* [wallet.addrs.ls](API.md#walletaddrsls)
* [wallet.balance](API.md#walletbalance)
* TODO: more to come in upcoming releases!

## Contribute

Feel free to dive in! [Open an issue](https://github.com/filecoin-project/js-filecoin-api/issues/new) or submit PRs.

## License

© Protocol Labs
