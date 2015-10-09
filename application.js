$(document).ready(function() {
  $(window).scroll(function() {
    $('.scroll-fade').each(function() {
      if ($(window).scrollTop() > $(this).position().top/2) {
        $(this).fadeIn();
      }
    });
  });
});
