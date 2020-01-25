class BeerSong
  def self.recite(bottles, verses)
    song = bottles.downto(0).take(verses).map do |count|
      verse(count)
    end
    song.join("\n")
  end

  def self.verse(count)
    if count.zero?
      <<~TEXT
        No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.
      TEXT
    elsif count == 1
      <<~TEXT
        1 bottle of beer on the wall, 1 bottle of beer.
        Take it down and pass it around, no more bottles of beer on the wall.
      TEXT
    elsif count == 2
      <<~TEXT
        2 bottles of beer on the wall, 2 bottles of beer.
        Take one down and pass it around, 1 bottle of beer on the wall.
      TEXT
    else
      next_beer = count - 1
      <<~TEXT
        #{count} bottles of beer on the wall, #{count} bottles of beer.
        Take one down and pass it around, #{next_beer} bottles of beer on the wall.
      TEXT
    end
  end
end
