
let Promise = require('es6-promise').Promise;import $ from "jquery";
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
// import {Data} from "./weath-api";

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

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("#weatherLocation").submit(function(e){
    e.preventDefault();
    let city = $("input:text[name=city]").val();
    let state = $("input:text[name=state]").val();
    // getData(city, state,)
    // let data = new Data(city, state, process.env.weather);
    // data.getData();

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${process.env.weather}`;
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   data: {
    //     format: 'json'
    //   },
    //   success: function(response) {
    //     $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //     $('.showTemp').text(`The temperature in ${city} is ${response.main.temp}.`);
    //   },
    //   error: function() {
    //     $('.errors').text("There was an error processing your request. Please try again.")
    //   }
    // });

    // let getElements = function(response){
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //  $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    // }
    //
    // let request = new XMLHttpRequest();
    // request.onreadystatechange = function(){
    //   if(this.readyState === 4 && this.status === 200){
    //     let response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // }
    //
    // request.open("GET", url, true);
    // request.send();

  //   $.get(url).then(function(response){
  //     $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
  //    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  //  }).fail(function(error){
  //    $(".error").text(error);
  //  });


  let promise1 = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    request.onload = function(){
      if(this.status === 200){
        resolve(request.responseText);
      } else{
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });
  promise1.then(function(response){
    let body = JSON.parse(response);
    $('.showHumidity').append(`<p class='lead'>The humidity in ${city} is ${body.main.humidity}%</p>`);
    $('.showHumidity').append(`<p class='lead'>The temperature in ${city} is ${body.main.temp} degrees.</p>`);
  }, function(error){
    $(".error").text(error);
  });



  let url2 = `http://api.openweathermap.org/data/2.5/weather?q=shanghai&appid=${process.env.weather}`;

  let promise2 = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    request.onload = function(){
      if(this.status === 200){
        resolve(request.responseText);
      } else{
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url2, true);
    request.send();
  });
  promise2.then(function(response){
    let body = JSON.parse(response);
    $('.showHumidity').append(`<p class='lead'>The humidity in shanghai is ${body.main.humidity}%</p>`);
    $('.showHumidity').append(`<p class='lead'>The temperature in shanghai is ${body.main.temp} degrees.</p>`);
  }, function(error){
    $(".error").text(error);
  });


  Promise.race(promise1, promise2);



  });




});
