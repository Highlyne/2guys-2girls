// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
function test2() {
 // search + API Key
 var api= "AIzaSyAHyYRJfWWzGaz8Ifc7v3_9dqUUrKR2Xz0";
//  var location = "cocoa beach"; // CHANGE THIS TO INPUT VALUE
 var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=AIzaSyAHyYRJfWWzGaz8Ifc7v3_9dqUUrKR2Xz0";

// AJAX
 $.ajax({
     url: queryURL,
     method: "GET"
 }).done(function (response) {
     console.log(queryURL);
     console.log(response);
 });
}

//Works-Able to pull back an object
test2();
 console.log("This is a test")
