import { Tamagotchi } from "../src/tamagotchi.js";

describe ('Tamagotchi', function(){
  let Tom = new Tamagotchi("Tom");

  beforeEach(function(){
    jasmine.clock().install();
    Tom.name = "Tom";
    Tom.healthLevel = 100;

    Tom.changeHealthLevel(16);
    // Tom.setHunger();
    // Tom.setSleep();
    // Tom.reset();

  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it("should have a name and health level of 100 when created", function(){
    expect(Tom.name).toEqual("Tom");
    expect(Tom.healthLevel).toEqual(100);
  });

  // it("should have a healthLevel of 99 after 1 second", () => {
  //   jasmine.clock().tick(1001);
  //   expect(Tom.healthLevel).toEqual(102);
  // });
  //
  // it("should have a healthLevel of 0 after 2 seconds", () =>{
  //   jasmine.clock().tick(2001);
  //   expect(Tom.healthLevel).toEqual(2);
  // });

  // it("should return one of below", () => {
  //   expect(['tv', 'running', 'eat', 'sleep', 'playVideoGame'].includes(Tom.generateActivity())).toBe(true);
  // });


  it("should return 116", function(){
    jasmine.clock().tick(1001);
    expect(Tom.healthLevel).toEqual(116);
  });

});
