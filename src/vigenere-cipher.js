class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];

      if (messageChar >= 'A' && messageChar <= 'Z') {
        const keyChar = key[j % key.length];
        const keyIndex = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const messageIndex = messageChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedIndex = (messageIndex + keyIndex) % 26;
        const encryptedChar = String.fromCharCode('A'.charCodeAt(0) + encryptedIndex);
        result += encryptedChar;
        j++;
      } else {
        result += messageChar;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];

      if (encryptedChar >= 'A' && encryptedChar <= 'Z') {
        const keyChar = key[j % key.length];
        const keyIndex = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedIndex = encryptedChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const messageIndex = (encryptedIndex - keyIndex + 26) % 26;
        const messageChar = String.fromCharCode('A'.charCodeAt(0) + messageIndex);
        result += messageChar;
        j++;
      } else {
        result += encryptedChar;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
