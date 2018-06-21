'use strict';

const Acronyms = {
  parse: (phrase) => {
    if (!phrase || typeof phrase !== 'string') {
      throw new Error('Phrase must be a string');
    }

    let acronym = [];
    const words = phrase.split(/[\s-]|[a-z](?=[A-Z])/);

    if (words.length) {
      acronym = words.map((word) => {
        return word.charAt(0).toUpperCase();
      });
    }

    return acronym.join('');
  }
};

module.exports = Acronyms;