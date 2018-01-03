// Begin Places function
function places() {
  var location = $(".location").val();
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
      if (pHour === true) {
      $("#restHours").html("Open")}
      else if (pHour === false) { 
      $("#restHours").html("Closed")};
    console.log(pHour);
    var pPrice = response.results["0"].price_level;
    $("#restPrice").text(pPrice);
    console.log(pPrice);

    // Second Response output to HTML
    var pName = response.results["1"].name;
    $("#restName1").text(pName);
    console.log(pName);
    var pRate = response.results["1"].rating;
    $("#restRating1").text(pRate);
    console.log(pRate);
    var pHour = response.results["1"].opening_hours.open_now;
    if (pHour === true) {
      $("#restHours1").html("Open")}
      else if (pHour === false) { 
      $("#restHours1").html("Closed")};
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
    if (pHour === true) {
      $("#restHours2").html("Open")}
      else if (pHour === false) { 
      $("#restHours2").html("Closed")};
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
    if (pHour === true) {
      $("#restHours3").html("Open")}
      else if (pHour === false) { 
      $("#restHours3").html("Closed")};
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
    if (pHour === true) {
      $("#restHours4").html("Open")}
      else if (pHour === false) { 
      $("#restHours4").html("Closed")};
    console.log(pHour);
    var pPrice = response.results["4"].price_level;
    $("#restPrice4").text(pPrice);
    console.log(pPrice);

  });
}

$(".search").on("click touchstart", function (event) {
  // added touchstart to click for mobile btn responsiveness //
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the location

  // Running the places function (passing in the location as an argument)
  places();
});


