  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAalnlowfk7atMaLgN3LGKDG9N-N6i9fxw",
  //   authDomain: "shoot-the-curl.firebaseapp.com",
  //   databaseURL: "https://shoot-the-curl.firebaseio.com",
  //   projectId: "shoot-the-curl",
  //   storageBucket: "shoot-the-curl.appspot.com",
  //   messagingSenderId: "291488823524"
  // };
  // firebase.initializeApp(config);

// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
function places() {
  // might have to change to an ID
var location = $(".location").val();
//  var location = "cocoa beach"; // CHANGE THIS TO INPUT VALUE
 var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + location + "&maxprice=2&rankby=prominence&type=bar&key=AIzaSyAHyYRJfWWzGaz8Ifc7v3_9dqUUrKR2Xz0";

// AJAX
 $.ajax({
     url: queryURL,
     method: "GET"
 }).done(function (response) {
     console.log(queryURL);
     console.log(response);
     var pName = response.results["0"].name;
     $("#restName").text(pName);
     console.log(pName);
     var pRate = response.results["0"].rating;
     $("#restRating").text(pRate);
     console.log(pRate);
     var pHour = response.results["0"].opening_hours.open_now;
     $("#restHours").text(pHour);
     console.log(pHour);
     var pPrice = response.results["0"].price_level;
     $("#restPrice").text(pPrice);
     console.log(pPrice);
 });
}

// $("#restName").text(response.results["0"].name);
// $("#restRating").text(response.results.rating);
// $("#restHours").text(response.results.opening_hours.open_now);
// $("#restPrice").text(response.results.price_level);


$(".search").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the location

  // Running the places function (passing in the location as an argument)
  places();
});


