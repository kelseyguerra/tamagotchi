import { Tamagotchi } from "../src/tamagotchi.js";

describe ('Tamagotchi', function(){
  let Tom = new Tamagotchi("Tom");

  beforeEach(function(){
    jasmine.clock().install();
    Tom.name = "Tom";
    Tom.healthLevel = 100;
    Tom.setHunger();
    Tom.setMood();
    Tom.reset();

  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it("should have a name and health level of 100 when created", function(){
    expect(Tom.name).toEqual("Tom");
    expect(Tom.healthLevel).toEqual(100);
  });

  it("should have a healthLevel of 99 after 1 second", () => {
    jasmine.clock().tick(1001);
    expect(Tom.healthLevel).toEqual(102);
  });

  it("should have a healthLevel of 0 after 2 seconds", () =>{
    jasmine.clock().tick(2001);
    expect(Tom.healthLevel).toEqual(2);
  })


});
