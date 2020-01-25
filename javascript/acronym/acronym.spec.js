const Acronyms = require('./acronym');

describe('Acronyms are produced from', function () {
  it('phrase is an invalid string', function () {
    expect(function() {
      /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }]*/
      Acronyms.parse(1);
    }).toThrow(new Error('Phrase must be a string'));
  });

  it('title cased phrases', function () {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  it('other title cased phrases', function () {
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  it('inconsistently cased phrases', function () {
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  it('phrases with punctuation', function () {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  it('other phrases with punctuation', function () {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  it('phrases with punctuation and sentence casing', function () {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
});

