'use strict';

function FoodChain() {
  // Constructor function
};

FoodChain.prototype.verse = function(line) {
  if (!line || typeof line !== 'number') {
    throw new Error('Verse must be a number');
  }

  var songLines = [
    ['fly', "I don't know why she swallowed the fly. Perhaps she'll die."],
    ['spider', "It wriggled and jiggled and tickled inside her."],
    ['bird', "How absurd to swallow a bird!"],
    ['cat', "Imagine that, to swallow a cat!"],
    ['dog', "What a hog, to swallow a dog!"],
    ['goat', "Just opened her throat and swallowed a goat!"],
    ['cow', "I don't know how she swallowed a cow!"],
    ['horse', "She's dead, of course!"]
  ];

  var lineIndex = line - 1;
  var fullVerse = ['I know an old lady who swallowed a ' + songLines[lineIndex][0] + '.'];

  if (line === 1 || line === 8) {
    fullVerse.splice(1, 0, songLines[lineIndex][1]);
  } else {
    for (var i = 0; i <= lineIndex; i++) {
      var tailLine = i === 1 ? ' that wriggled and jiggled and tickled inside her.' : '.';

      if (i === 0 || i === lineIndex) {
        fullVerse.splice(1, 0, songLines[i][1]);
      }

      if (i !== lineIndex) {
        fullVerse.splice(1, 0, 'She swallowed the ' + songLines[i+1][0] + ' to catch the ' + songLines[i][0] + tailLine);
      }
    }
  }

  fullVerse.push('');
  return fullVerse.join('\n');
};

FoodChain.prototype.verses = function(startVerse, endVerse) {
  if (!startVerse || typeof startVerse !== 'number' || !endVerse || typeof endVerse !== 'number') {
    throw new Error('Verses must be a number');
  }

  var fullSong = [];

  for (var i = startVerse; i <= endVerse; i++) {
    fullSong.push(this.verse(i));
  }

  fullSong.push('');
  return fullSong.join('\n');
};

module.exports = FoodChain;