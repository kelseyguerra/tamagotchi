import { Planet } from "../src/planet";
import { LivingBeing } from "../src/livingBeing";


describe("Planet", function () {
  let resuablePlanet;
  let livingBeing = new LivingBeing("March 21, 2012", 89);
  beforeEach(function () {
    resuablePlanet = new Planet('earth', 1, livingBeing);
  });

  it("should has value of 89 on property of avgLifespan when resuablePlanet is created", () => {
    expect(resuablePlanet.name).toEqual("earth");
  });

});