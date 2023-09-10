import CryptoJS from 'crypto-js';

const SECRET_KEY = 'HelloIamVibhBhakkam';


export const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(data, SECRET_KEY);
    return ciphertext.toString();
  };


export  const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };