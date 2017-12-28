// Plays the onClick .wav file
function play(){
    var audio = document.getElementById("audio");
    audio.play();
              }


// Clears the searchbar and resets the placeholder text on focus
$('input:text').focus(
    function(){
        $(this).val('');
    });
