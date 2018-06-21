'use strict';

class SecretHandshake {
  constructor(handshake) {
    if (!handshake || typeof handshake !== 'number') {
      throw new Error('Handshake must be a number');
    }

    this.handshake = handshake;
  }

  commands() {
    const binary = Number(this.handshake).toString(2);
    const binaryDigits = binary.split('').reverse();
    const commandsList = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];
    let finalCommands = [];
    let index = 0;

    while (index < binaryDigits.length) {
      if (commandsList[index] === 'reverse') {
        finalCommands = finalCommands.reverse();
      } else if (binaryDigits[index] === '1') {
        finalCommands.push(commandsList[index]);
      }

      index++;
    }

    return finalCommands;
  }
};

module.exports = SecretHandshake;