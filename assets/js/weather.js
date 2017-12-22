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

// AJAX
function getLoc() {
    var locationName = $(".location").val();     // ****CHANGE THIS TO INPUT VALUE*****
    var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + locationName + "&maxprice=2&rankby=prominence&type=bar&key=AIzaSyAHyYRJfWWzGaz8Ifc7v3_9dqUUrKR2Xz0";
    // GOOGLE AJAX
    $.ajax({
        url: queryURL,
        method: "GET",
        // GOOGLE PROMISE
    }).done(function (gResponse) {
        console.log(queryURL);
        console.log(gResponse);

        // COORDINATES
        // LATITUDE
        console.log("Lat:" + gResponse.results["0"].geometry.location.lat);
        var lat = gResponse.results["0"].geometry.location.lat;
        //LONGITUDE
        console.log("Long:" + gResponse.results["0"].geometry.location.lng);
        var long = gResponse.results["0"].geometry.location.lng;
        weather(lat,long);
    })
}
// FUNCTION TO CALL WEATHER AJAX
function weather(lat, long) {
    // search + API Key
    var location = lat + "," + long;
    var queryURL = "http://api.worldweatheronline.com/premium/v1/marine.ashx?key=913a2d1646d941cea87153512172112&q=" + location + "&tp=24&tide=yes&format=json";

    // WEATHER AJAX
    $.ajax({
        url: queryURL,
        method: "GET",
        //WEATHER PROMISE
    }).done(function (response) {
        console.log(queryURL);
        console.log(response);
    })
}
$(".search").on("click", function (event) {
    getLoc();
})