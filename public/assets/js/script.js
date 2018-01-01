// Plays the onClick .wav file
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}


// Clears the searchbar and resets the placeholder text on focus
$('input:text').focus(
    function () {
        $(this).val('');
    });

// Trigger search btn on Enter(13) press
$(document).keypress(function (e) {
    if (e.which === 13) {
        $(".btn").first().click();
    }
});

// Alert for IE
function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else
        return 0; //It is not IE
}

if (GetIEVersion() > 0)
    // Alert window called with custom message for IE users ;)
    alert("Hi there T-Rex. Still using Internet Explorer...Really? Please upgrade to Chrome. T-Rex don't Surf!");
