(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('html').removeClass('nav-open');
    $('#bodyClick').remove();
    setTimeout(function() {
      $('.navbar-toggler').removeClass('toggled');
    }, 550);
  });
  
})(jQuery); // End of use strict
function getIP(json) {
  console.log(json.ip);
  // $.post(`${base_url}auth/ajax_ipify`, {ip: json.ip});
}