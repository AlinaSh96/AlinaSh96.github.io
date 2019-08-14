
$(function () {


  $(document).ready(function () {
    var windowHeight = $(window).height();

    $(document).on('scroll', function () {
      $('.anm').each(function () {
        var self = $(this),
          height = self.offset().top + self.height();
        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass('fadeInLeftBig ')
        }
      });
    });
  });

/*меню */
  $('.menu-icon').on('click', function () {
    $('.menu').slideToggle(300, function () {
      if ($(this).css('display') === "none") {
        $(this).removeAttr('style');
      }
    });

    if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }

  });
/* Кнопка */
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0)
      $('#toTop').fadeIn();
    else
      $('#toTop').fadeOut();
  });
  $('#toTop').click(function () {
    /*$('body,html').animate({
      scrollTop: 0
    }, 800);*/
  });
});



