import {LivingBeing} from "../src/livingBeing";

describe("livingBeing", function(){
  let livingBeing = LivingBeing();
  beforeEach( () => {
    livingBeing = new LivingBeing(10, 89);
  });

  it("should has value of 89 on property of avgLifespan when livingBeing is created", () => {
    expect(livingBeing.avgLifespan).toEqual(89);
  });

});