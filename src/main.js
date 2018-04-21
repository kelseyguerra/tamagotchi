import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { GalacticAgeCaculator } from "../src/galacticAgeCaculator"
import { Planet } from "../src/planet";
import { LivingBeing } from "../src/livingBeing"


// Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
// Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
// Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
// Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)



$().ready( ()=> {
  $("#galactic").submit( e => {
    e.preventDefault();

    let earthYears = {
      Earth: 1,
      Venus: 0.62,
      Mars: 1.88,
      Jupiter: 11.86,
    }

    let name = $("#name").val();
    if(name){
      name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    }
    let birthday = new Date($("#birthday").val());
    let avgLifespan = parseInt($("#avgLifespan").val());

    // if(name !== "Earth People"){
    //   name = "Earth People";
    // }
    debugger;
    let livingBeing = new LivingBeing(birthday, avgLifespan, name);
    for(let key in earthYears){
      let planet = new Planet(key, earthYears[key], livingBeing);
      let galacticAgeCaculator = new GalacticAgeCaculator(planet, livingBeing);
      let planetAge = galacticAgeCaculator.planetAge();
      let nextBirthday = galacticAgeCaculator.nextBirthdayDate();
      let yearsLeft = Math.ceil(galacticAgeCaculator.yearsToGoOnOtherPlanets());
      let output = `<div class='mt-5'>
                     <h2 class='lead text-center'>${name}, On ${key} </h2><hr>  
                     <div class="row">
                      <div class="col-4 age">
                        <p class='lead'>You are ${planetAge} years old
                      </div>
                      <div class="col-4 yearsLeft">
                      <p class='lead'>Your next birthday is ${nextBirthday}
                      </div>
                      <div class="col-4 nextBirthday">
                      <p class='lead'>There are ${yearsLeft} years to have fun
                      </div>
                     </div>
                     </div>` 
      $(".planets").append(output);
    }

  });
});
