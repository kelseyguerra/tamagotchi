export class Tamagotchi {
  constructor(name){
    this.name = "Bean";
    this.healthLevel = 5;
    // this.tv = -10;
    // this.running = 8;
    this.eat = 5;
    this.sleep = 10;
    this.playVideoGame = -30;
  }

    healthLevel() {
      this.healthLevel = 100;
    }

  //   setHunger(){
  //     setInterval(() => {
  //       this.healthLevel --;
  //     }, 1000);
  //   }
  //
  // setMood(){
  //   setInterval(() => {
  //     this.healthLevel += 3;
  //   }, 1000);
  // }
  //
  // reset(){
  //   setTimeout( () => {
  //     this.healthLevel = 0;
  //   }, 2000);
  // }

  // generateActivity(){
  //   let activities = ['tv', 'running', 'eat', 'sleep', 'playVideoGame'];
  //   return activities[Math.floor(Math.random()*5)];
  // }

  changeHealthLevel(number){
    setInterval(() => {
    this.healthLevel += number;
  }, 1000);
  }

}
