import { LivingBeing } from "../src/livingBeing";

describe("livingBeing", function () {
  let livingBeing;
  beforeEach(() => {
    livingBeing = new LivingBeing("March 21, 2012", 89);
  });

  it("should has value of 89 on property of avgLifespan when livingBeing is created", () => {
    expect(livingBeing.avgLifespan).toEqual(89);
  });


  it("should return time delta in seconds", () => {
    expect(livingBeing.earthAgeInSeconds()).toBeGreaterThan(191949634);
  });

  it("should return an earth age", () => {
    debugger;
    expect(livingBeing.earthAge()).toBeGreaterThan(5.9);
  })



});