
import CryptoEs from "crypto-es"
import key from "../src/var/key";

/**
 * @property {callback} stringify
 */
const JsonFormatter = {
    stringify: function (cipherParams) { // create json object with ciphertext
        const jsonObj = { ct: cipherParams.ciphertext.toString(CryptoEs.enc.Base64) }; // optionally add iv and salt
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
        }
        // stringify json object
        return JSON.stringify(jsonObj);
    },
    parse: function (jsonStr) { // parse json string
        const jsonObj = JSON.parse(jsonStr); // extract ciphertext from json object, and create cipher params object
        const cipherParams = CryptoEs.lib.CipherParams.create(
            { ciphertext: CryptoEs.enc.Base64.parse(jsonObj.ct) },
        ); // optionally extract iv and salt
        if (jsonObj.iv) {
            cipherParams.iv = CryptoEs.enc.Hex.parse(jsonObj.iv)
        }
        if (jsonObj.s) {
            cipherParams.salt = CryptoEs.enc.Hex.parse(jsonObj.s)
        }
        return cipherParams;
    },
};



/**
 * 
 * @param {String} value 
 * @param {String} messageKey 
 * @returns 
 */
function encrypt(value, messageKey) {
    return CryptoEs.AES.encrypt(
        value,
        messageKey || key.app_key,
        { format: JsonFormatter },
    ).toString();
}

/**
 * 
 * @param {String} value 
 * @param {String} messageKey 
 * @returns 
 */
function decrypt(value, messageKey) {
    return CryptoEs.AES.decrypt(
        value,
        messageKey || key.app_key,
        { format: JsonFormatter },
    ).toString(CryptoEs.enc.Utf8);
}

/**
 * 
 * @returns []
 */
export default function useEncryption() {
    return [encrypt, decrypt];
}