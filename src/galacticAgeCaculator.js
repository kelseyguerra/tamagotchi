// Take a person’s age in years and convert it into seconds.
// Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)
// Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
// Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
// Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
// Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

class GalacticAgeCaculator {
  constructor(planet, livingBeing) {
    this.planet = planet;
    this.livingBeing = livingBeing;
  }

  planetAge() {
    return Math.ceil(this.livingBeing.earthAge() * this.planet.earthYear);
  }

  nextBirthdayDate() {
    new Date("March 21, 2012").setFullYear(new Date().getFullYear())
    let month = new Date().getMonth();
    let birthMonth = new Date(this.livingBeing.birthday).getMonth();
    let nextEarthBirthday;
    if (month < birthMonth) {
      nextEarthBirthday = new Date(this.livingBeing.birthday).setFullYear(new Date().getFullYear())
    } else {
      nextEarthBirthday = new Date(this.livingBeing.birthday).setFullYear((new Date().getFullYear() + 1));
    }
    return new Date((nextEarthBirthday - Date.now()) * this.planet.earthYear + Date.now());
  
  }

  yearsToGoOnOtherPlanets() {
    let leftYears = this.livingBeing.avgLifespan * this.planet.earthYear - this.planetAge();
    if (leftYears < 0) {
      leftYears = this.planetAge() - this.livingBeing.avgLifespan * this.planet.earthYear;
    }
    return leftYears;
  }

}

export { GalacticAgeCaculator };