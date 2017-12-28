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

// trigger search btn on Enter(13) press
$(document).keypress(function (e) {
    if (e.which === 13) {
        $(".btn").first().click();
    }
});
