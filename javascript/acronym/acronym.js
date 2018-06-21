'use strict';

function Acronyms() {
  return {
    parse: function(phrase) {
      if (!phrase || typeof phrase !== 'string') {
        throw new Error('Phrase must be a string');
      }

      var acronym = [];
      var words = phrase.split(/[\s-]|[a-z](?=[A-Z])/);

      if (words.length) {
        acronym = words.map(function(word) {
          return word.charAt(0).toUpperCase();
        });
      }
      
      return acronym.join('');
    }
  };
};

module.exports = Acronyms();