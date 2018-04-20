import {Planet} from "../src/planet";

describe("Planet", function(){
  let resuablePlanet;
  beforeEach(function(){
    resuablePlanet = new Planet(11, 89);
  });

  it("should has value of 89 on property of avgLifespan when resuablePlanet is created", function(){
    expect(resuablePlanet.avgLifespan).toEqual(89);
  });


});