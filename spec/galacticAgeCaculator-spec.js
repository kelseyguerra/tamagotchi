import {GalacticAgeCaculator} from "../src/galacticAgeCaculator"

describe("GalacticAgeCaculator", function(){
  let resuableCalcs;
  beforeEach(function(){
    resuableCalcs = new GalacticAgeCaculator("venus", 10);
  });

  it("should has value of 'venus' and 10 after an instance created", function(){
    expect(resuableCalcs.earthAge).toEqual(10);
    expect(resuableCalcs.planet).toEqual("venus");
  });


});