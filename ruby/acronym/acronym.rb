# Acronym used to abbreviate words into TLAs
class Acronym
  def self.abbreviate(phrase)
    phrase.scan(/\b\w/).join.upcase
  end
end
