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
function test() {
    // search + API Key
    var location = "cocoa beach"; // CHANGE THIS TO INPUT VALUE
    var queryURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=913a2d1646d941cea87153512172112&q=" + location + "&format=json";

    // AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(queryURL);
        console.log(response);
        var weather = response.data
    });
}
test();
