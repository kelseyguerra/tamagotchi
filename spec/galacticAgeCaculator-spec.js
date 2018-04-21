import {GalacticAgeCaculator} from "../src/galacticAgeCaculator"
import {Planet} from "../src/planet";
import {LivingBeing} from "../src/livingBeing"

describe("GalacticAgeCaculator", function(){
  let resuableCalcs;
  let planet;
  let livingBeing
  beforeEach(function(){
    livingBeing = new LivingBeing("March 21, 2012", 89);
    planet = new Planet('Mars', 1.88, livingBeing);
    resuableCalcs = new GalacticAgeCaculator(planet, livingBeing);

  });

  it("should has value of 'earth' and 10 after an instance created", function(){
    expect(resuableCalcs.planet).toBeObject();
    expect(resuableCalcs.livingBeing).toBeObject();
  });


  it("should return current planet age", () => {
    expect(resuableCalcs.planetAge()).toBeGreaterThan(1.88*5.9);
  });

  it("should return ", () => {
    expect(resuableCalcs.nextBirthdayDate()).toBeDate();

  })


});

