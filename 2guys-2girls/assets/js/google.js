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

    // First Response output to HTML
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

    // BEGIN - THIS SECTION WAS ADDED //////////////////////////////////////////////////
    // Second Response output to HTML
    var pName = response.results["1"].name;
    $("#restName1").text(pName);
    console.log(pName);
    var pRate = response.results["1"].rating;
    $("#restRating1").text(pRate);
    console.log(pRate);
    var pHour = response.results["1"].opening_hours.open_now;
    $("#restHours1").text(pHour);
    console.log(pHour);
    var pPrice = response.results["1"].price_level;
    $("#restPrice1").text(pPrice);
    console.log(pPrice);

    // Third Response output to HTML
    var pName = response.results["2"].name;
    $("#restName2").text(pName);
    console.log(pName);
    var pRate = response.results["2"].rating;
    $("#restRating2").text(pRate);
    console.log(pRate);
    var pHour = response.results["2"].opening_hours.open_now;
    $("#restHours2").text(pHour);
    console.log(pHour);
    var pPrice = response.results["2"].price_level;
    $("#restPrice2").text(pPrice);
    console.log(pPrice);

    // Fourth Response output to HTML
    var pName = response.results["3"].name;
    $("#restName3").text(pName);
    console.log(pName);
    var pRate = response.results["3"].rating;
    $("#restRating3").text(pRate);
    console.log(pRate);
    var pHour = response.results["3"].opening_hours.open_now;
    $("#restHours3").text(pHour);
    console.log(pHour);
    var pPrice = response.results["3"].price_level;
    $("#restPrice3").text(pPrice);
    console.log(pPrice);

    // Fifth Response output to HTML
    var pName = response.results["4"].name;
    $("#restName4").text(pName);
    console.log(pName);
    var pRate = response.results["4"].rating;
    $("#restRating4").text(pRate);
    console.log(pRate);
    var pHour = response.results["4"].opening_hours.open_now;
    $("#restHours4").text(pHour);
    console.log(pHour);
    var pPrice = response.results["4"].price_level;
    $("#restPrice4").text(pPrice);
    console.log(pPrice);

    // END END END - THE ABOVE SECTION WAS ADDED //////////////////////////////////////

  });
}

// $("#restName").text(response.results["0"].name);
// $("#restRating").text(response.results.rating);
// $("#restHours").text(response.results.opening_hours.open_now);
// $("#restPrice").text(response.results.price_level);


$(".search").on("click touchstart", function (event) {
  //added touchstart to click for mobile btn responsiveness//
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the location

  // Running the places function (passing in the location as an argument)
  places();
});


