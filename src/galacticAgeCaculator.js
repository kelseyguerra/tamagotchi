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