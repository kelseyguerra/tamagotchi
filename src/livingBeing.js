class LivingBeing {
  constructor(birthday, avgLifespan) {
    this.birthday = Date.parse(birthday);
    this.avgLifespan = avgLifespan;
  }

  earthAgeInSeconds() {
    return (Date.now() - this.birthday) / 1000;
  }

  earthAge() {
    return Math.ceil(this.earthAgeInSeconds() / (365 * 24 * 3600));
  }
}

export { LivingBeing };