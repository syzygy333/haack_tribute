$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos = 50
    var divNum = 1
    if ($(this).scrollTop() > scrollPos) {
      $('.scrolltop' + divNum).fadeIn();
      scrollPos += 50;
      divNum += 1;
    } else {
      $('.scrolltop').fadeOut();
    }
  });
});
