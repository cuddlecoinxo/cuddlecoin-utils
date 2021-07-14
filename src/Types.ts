// Copyright (c) 2018-2020, The CuddleCoin Developers
//
// Please see the included LICENSE file for more information.

import { Crypto } from 'turtlecoin-crypto';
import * as BigInteger from 'big-integer';

/** @ignore */
const CuddleCoinCrypto = new Crypto();

export { CuddleCoinCrypto };

/** @ignore */
export enum PortableStorageConstants {
    SIGNATURE_A = 0x01011101,
    SIGNATURE_B = 0x01020101,
    VERSION = 1,
}

export * from './Types/PortableStorageValue';

export { ICryptoConfig } from 'turtlecoin-crypto';

export * from './Types/IExtraNonce';

export * from './Types/IExtraTag';

export * from './Types/ITransactionInput';

export * from './Types/ITransactionOutput';

export * from './Types/ED25519';

export * from './Types/ITransaction';

export * from './Types/MultisigInterfaces';

export * from './Types/ICryptoNote';

export * from './Types/Ledger';

export * from './Types/WalletAPI';

export * from './Types/LegacyCuddleCoind';

export * from './Types/CuddleCoind';

export { PortableStorage, StorageType } from './Types/PortableStorage';

export { BigInteger };
