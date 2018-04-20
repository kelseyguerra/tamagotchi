import {Planet} from "../src/planet";
import {LivingBeing} from "../src/livingBeing";

describe("Planet", function(){
  let resuablePlanet;
  let livingBeing = new LivingBeing(11, 89);
  beforeEach(function(){
    resuablePlanet = new Planet('earth', livingBeing);
  });

  it("should has value of 89 on property of avgLifespan when resuablePlanet is created", () => {
    expect(resuablePlanet.name).toEqual("earth");
    expect(livingBeing.avgLifespan).toEqual(89);
  });

  it("should return earth age in seconds", () => {
    expect(resuablePlanet.earthAgeToSeconds(10)).toEqual(10*365*24*60*60);
  });

});