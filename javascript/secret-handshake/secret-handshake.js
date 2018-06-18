'use strict';

function SecretHandshake(handshake) {
  if (!handshake || typeof handshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  this.handshake = handshake;
};

SecretHandshake.prototype.commands = function() {
  var binary = Number(this.handshake).toString(2);
  var binaryDigits = binary.split('').reverse();
  var commandsList = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];
  var finalCommands = [];
  var index = 0;

  while (index < binaryDigits.length) {
    if (commandsList[index] === 'reverse') {
      finalCommands = finalCommands.reverse();
    } else if (binaryDigits[index] === '1') {
      finalCommands.push(commandsList[index]);
    }

    index++;
  }

  return finalCommands;
};

module.exports = SecretHandshake;