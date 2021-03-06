# CuddleCoin Utilities

## Overview
This package contains a number of different utility libraries that help with the following network and wallet based activities:

* Wallet (and Address) generation, verification, and encoding/decoding
* Block handling, construction, decoding, and ID and PoW hash calculation
* Block template handling
* Multisig operations including Multisig participant message exchanges
* RPC interations with CuddleCoind and Wallet-API
* Network P2P communication protocols (connect to the P2P network directly)
* Transaction construction facilities
* Ledger hardware wallet interaction for the [CuddleCoinÂ® Ledger Wallet Application](https://github.com/turtlecoin/ledger-turtlecoin-app)
* Transaction handling, construction, decoding, hash calculations, TX_EXTRA parsing, etc
* Deterministic subwallet generation
* And much, much, more...

If you experience any issues with this library, the best way to address such situations is to submit a Pull Request to resolve the issue you are running into.

## Installation

```bash
npm install cuddlecoin-utils
```

## Initialization

### TypeScript

```typescript
import {
    Address, 
    AddressPrefix, 
    Block, 
    BlockTemplate, 
    CryptoNote, 
    LevinPacket, 
    Transaction
} from 'cuddlecoin-utils'
const coinUtils = new CryptoNote()
```

### Javascript

```javascript
const CuddleCoinUtils = require('cuddlecoin-utils')
const coinUtils = new CuddleCoinUtils.CryptoNote()
```

### Browser Support

When packing for the browser with a tool like [webpack](https://webpack.js.org/) we advise that you use the ready `event` of the webpacked module to determine when the Cryptographic methods are available.

```html
<script src="CuddleCoinUtils.js"></script>
<script>
  CuddleCoinUtils.on('ready', () => {
    const coinUtils = new CuddleCoinUtils.CryptoNote()
  })
</script>
```

### Documentation

You can find the full documentation for this library [here](https://utils.turtlecoin.dev)

### Credits

Special thanks goes out to:

* Lucas Jones
* Paul Shapiro
* Luigi111
* [The MyMonero Project](https://github.com/mymonero/mymonero-app-js)
* The Masari Project: [gnock](https://github.com/gnock)
* The Plentum Project: [DaveLong](https://github.com/DaveLong)
