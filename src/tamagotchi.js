export class Tamagotchi {
  constructor(name){
    this.name = "Tom";
    this.healthLevel = 100;
    this.foodLevel = 10;
    this.moodLevel = 10;
  }

    healthLevel() {
      this.healthLevel = 100;
    }


    setHunger(){
      setInterval(() => {
        this.healthLevel --;
      }, 1000);
    }

  setMood(){
    setInterval(() => {
      this.healthLevel += 3;
    }, 1000);
  }

  reset(){
    setTimeout( () => {
      this.healthLevel = 0;
    }, 2000);
  }

}
