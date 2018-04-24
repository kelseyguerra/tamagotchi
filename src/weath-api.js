// import $ from "jquery";
//
// class Data{
//   constructor(city, state, apiKey, message){
//     this.city = city;
//     this.state = state;
//     this.apiKey = apiKey;
//     this.message = message;
//   }
//
//   displayData(response){
//     $('.showHumidity').text(`The humidity in ${this.city} is ${response.main.humidity}%`);
//      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//   }
//
//   getData(){
//     $.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`).then(function(response) {
//      displayData(response);
//    }).fail(function() {
//      console.log('something went wrong');
//    });
//   }
//
//
// }
