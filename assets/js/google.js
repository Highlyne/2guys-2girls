  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAalnlowfk7atMaLgN3LGKDG9N-N6i9fxw",
    authDomain: "shoot-the-curl.firebaseapp.com",
    databaseURL: "https://shoot-the-curl.firebaseio.com",
    projectId: "shoot-the-curl",
    storageBucket: "shoot-the-curl.appspot.com",
    messagingSenderId: "291488823524"
  };
  firebase.initializeApp(config);
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
function places() {
  // might have to change to an ID
var location = $(".location").val();
//  var location = "cocoa beach"; // CHANGE THIS TO INPUT VALUE
 var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + location + "&key=AIzaSyAHyYRJfWWzGaz8Ifc7v3_9dqUUrKR2Xz0";

// AJAX
 $.ajax({
     url: queryURL,
     method: "GET"
 }).done(function (response) {
     console.log(queryURL);
     console.log(response);
 });
}
$("#placeResult").html("<p>" + response.results.name);
$("#placeResult").append("<p>" + response.results.rating);
$("#placeResult").append("<p>" + response.results.opening_hours.open_now);
$("#placeResult").append("<p>" + response.results.price_level);

$(".btn btn-default search").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the location
  var location = $("#placeResult").val().trim();

  // Running the places function (passing in the location as an argument)
  places(location);
});


