$(document).ready(function () {

 
  $('ul.menu a[href^="#"').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('ul.menu a[href^="#"').css({
      'color': '#fff'
    });
    $(this).css({
      'color': '#fe504f'
    });
    return false;
  });
  /* Выпадающее меню */
  $('.menu-icon').click(function () {
    $('.menu__links').slideToggle(500, function () {
      if ($('.menu__links').css('display') === "none") {
        $(this).removeAttr('style');
      }
    });

    var btn = document.querySelectorAll('button');
    for (var i = 0; i < btn.length; i++) {
      btn[i].style.outline = 'none';
    }
    if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }

  });

});
