/**
 * Script Name: RSAEncryption
 * Description: An RSA encryption and decryption utility using pure JavaScript.
 * Author: Foreverekk
 */

//
import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

export class RSAEncryption {
    /**
     * Initializes the RSA encryption utility by generating a 2048-bit key pair.
     * The generated key pair is stored as instance properties `publicKey` and `privateKey`.
     */
    constructor() {
        const { publicKey, privateKey } = generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
        });

        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    /**
     * Encrypts a given message using the RSA public key.
     * @param {string} message - The message to be encrypted.
     * @returns {string} The encrypted message as a base64-encoded string.
     */
    encrypt(message) {
        return publicEncrypt(this.publicKey, Buffer.from(message)).toString('base64');
    }

    /**
     * Decrypts an encrypted message using the RSA private key.
     * @param {string} encrypted - The encrypted message as a base64-encoded string.
     * @returns {string} The original decrypted message.
     */
    decrypt(encrypted) {
        return privateDecrypt(this.privateKey, Buffer.from(encrypted, 'base64')).toString();
    }
}

// Example Usage:
const rsa = new RSAEncryption();
const encrypted = rsa.encrypt('Super Secret Message');
console.log('Encrypted:', encrypted);
console.log('Decrypted:', rsa.decrypt(encrypted));
