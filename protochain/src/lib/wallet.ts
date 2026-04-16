import * as ecc from 'tiny-secp256k1';
import ECPairFactory, { ECPairInterface } from 'ecpair';
// import { Buffer } from 'buffer';

const ECPair = ECPairFactory(ecc);

/**
 * Wallet class
 */
export default class Wallet {

    privateKey: string;
    publicKey: string;

    constructor(wifOrPrivateKey: string) {
        let keys;

        if (wifOrPrivateKey) {
            if (wifOrPrivateKey.length === 64)
                keys = ECPair.fromPrivateKey(Buffer.from(wifOrPrivateKey, "hex"));
            else
                keys = ECPair.fromWIF(wifOrPrivateKey);                
        } else
            keys = ECPair.makeRandom();

        this.privateKey = keys.privateKey ? Buffer.from(keys.privateKey).toString("hex") : "";
        this.publicKey = Buffer.from(keys.publicKey).toString("hex");
    }
}