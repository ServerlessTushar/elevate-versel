import * as CryptoJS from 'crypto-js';

const secretKey = 'YourSecretKey';

export function encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Decrypt function
export function decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
