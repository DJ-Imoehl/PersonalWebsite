$(document).ready(function(){

  if($(this).width() > 300){
    $(".resume-section-content").tilt({
      maxTilt: 5,
    });

    $(".opening-text-containter").tilt({
      maxTilt: 5,
    });
  }

  // Got this animation from w3schools: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
  $("a").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});


$(window).resize(function() {
  if ($(this).width() < 300) {
    $(".resume-section-content").tilt({
      maxTilt: 0,
    });

    $(".opening-text-containter").tilt({
      maxTilt: 0,
    });
  } else {
    $(".resume-section-content").tilt({
      maxTilt: 5,
    });

    $(".opening-text-containter").tilt({
      maxTilt: 5,
    });
  }
});
