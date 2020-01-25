class Anagram
  def initialize(matcher)
    @matcher = matcher
    @matcher_lower = matcher.downcase
    @matcher_chars = sort_chars(matcher)
  end

  def match(words)
    words.select do |word|
      sort_chars(word) == @matcher_chars if word.downcase != @matcher_lower
    end
  end

private
  def sort_chars(word)
    word.downcase.chars.sort
  end
end
