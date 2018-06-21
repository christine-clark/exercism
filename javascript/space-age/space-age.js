'use strict';

const Age = {
  calculate(seconds, planet) {
    const earthSecondsInYear = 31557600;
    const planetSeconds = {
      earth: earthSecondsInYear,
      mercury: earthSecondsInYear * 0.2408467,
      venus: earthSecondsInYear * 0.61519726,
      mars: earthSecondsInYear * 1.8808158,
      jupiter: earthSecondsInYear * 11.862615,
      saturn: earthSecondsInYear * 29.447498,
      uranus: earthSecondsInYear * 84.016846,
      neptune: earthSecondsInYear * 164.79132,
    };

    return Math.round((seconds / planetSeconds[planet]) * 100) / 100;
  }
}

class SpaceAge {
  constructor(seconds) {
    if (!seconds || typeof seconds !== 'number') {
      throw new Error('Seconds must be a number');
    }

    this.seconds = seconds;
  }

  onEarth() {
    return Age.calculate(this.seconds, 'earth');
  }

  onMercury() {
    return Age.calculate(this.seconds, 'mercury');
  }

  onVenus() {
    return Age.calculate(this.seconds, 'venus');
  }

  onMars() {
    return Age.calculate(this.seconds, 'mars');
  }

  onJupiter() {
    return Age.calculate(this.seconds, 'jupiter');
  }

  onSaturn() {
    return Age.calculate(this.seconds, 'saturn');
  }

  onUranus() {
    return Age.calculate(this.seconds, 'uranus');
  }

  onNeptune() {
    return Age.calculate(this.seconds, 'neptune');
  }
};

module.exports = SpaceAge;