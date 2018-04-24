import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import img1 from "../img/default.gif";
import eat from "../img/eat3.gif";
import food from "../img/eat.gif";
import exercise from "../img/play2.gif";
import play from "../img/play.gif";
import sleep from "../img/sleep.gif";

import {Tamagotchi} from "./Tamagotchi";

$().ready(function(){

  $(".img-spot").html(`<img src=${img1} />`);

  let tomogotchi = new Tamagotchi("Tony");

  $(".btn").click(function(e){
    let eventTarget = e.target.id;
    let advice;
    tomogotchi.healthLevel += parseInt(tomogotchi[eventTarget]);
    let hl = tomogotchi.healthLevel;

    if(hl < 0 ){
      advice = `${tomogotchi.name} is hungry`;
      $(".img-spot").html(`<img src=${food} />`);
    }else if(hl < 10 ){
      advice = `${tomogotchi.name} is sleepy`;
      $(".img-spot").html(`<img src=${sleep} />`);
    }else if(hl < 30 ){
      advice = `${tomogotchi.name} is fat`;
      $(".img-spot").html(`<img src=${eat} />`);
    }else if(hl < 50){
        advice = `${tomogotchi.name} wants to play`;
      $(".img-spot").html(`<img src=${exercise} />`);
    }else if(hl <= 100){
      advice = `${tomogotchi.name} is dead`;
      // (".img-spot").html(`<img src=${} />`);
    }

    $(".output").html(`<p class="lead text-center"><h5>Heatlh:</h5> ${tomogotchi.healthLevel}</p>`);
    if(advice){
      $(".output").append(`<h5 class='text-center'>${advice}</h5>`);
    }


  });



});
