function getLoc() {
    var locationName = "orlando";     // ****CHANGE THIS TO INPUT VALUE*****
    var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + locationName + "&key=AIzaSyAHyYRJfWWzGaz8Ifc7v3_9dqUUrKR2Xz0";
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


        // FUNCTION TO CALL WEATHER AJAX
        function weather() {
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
        weather();
    })
}
getLoc();
