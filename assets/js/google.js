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
();
