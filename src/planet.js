class Planet{
  constructor(name, earthYear, livingBeing) {
    this.name = name;
    this.earthYear = earthYear;
    this.livingBeing = livingBeing;
  }

  earthAgeToSeconds(age){
    return age * 365 *24 * 3600; 
  }
}

export {Planet};