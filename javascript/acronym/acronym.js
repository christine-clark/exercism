'use strict';

const Acronyms = {
  parse: phrase => {
    if (!phrase || typeof phrase !== 'string') {
      throw new Error('Phrase must be a string');
    }

    let acronym = [];
    const words = phrase.split(/[\s-]|[a-z](?=[A-Z])/);

    if (words.length) {
      acronym = words.map(word => word.charAt(0));
    }

    return acronym.join('').toUpperCase();
  }
};

module.exports = Acronyms;