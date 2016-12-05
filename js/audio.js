$(document).ready(function() {
  var activePlayer = null;

  $('.audio-message').click(function() {
    var audio = $(this).parent().find(".audio")[0];

    if (activePlayer !== null) {
      activePlayer.pause();

      $(activePlayer).parent().find(".audio-message").removeClass("active");
    }

    // если был клик по активному плееру
    if (activePlayer === audio) {
      activePlayer = null;
      
      return;
    }

    audio.play();
    
    activePlayer = audio;

    $(activePlayer).parent().find(".audio-message").addClass("active");

    audio.onended = function() {
      $(".audio-message").removeClass("active");
    };
  });
});







