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
