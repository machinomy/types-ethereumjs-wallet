import { Buffer } from "safe-buffer";

declare module "ethereumjs-wallet" {

  class Wallet {
    static fromPrivateKey(key: Buffer): Wallet;
    static fromV3(json: string, password: string): Wallet;
    getPrivateKey(): Buffer;
    getAddressString(): string;
  }

  namespace Wallet {}

  export = Wallet;
}

declare module "ethereumjs-wallet/hdkey" {
  import * as Wallet from "ethereumjs-wallet"

  class EthereumHDKey {
    getWallet(): Wallet
  }

  export function fromMasterSeed(seed: Buffer): EthereumHDKey
}
