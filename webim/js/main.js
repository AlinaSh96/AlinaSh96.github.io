$(function () {

  $('.menu-icon').on( 'click', function () {
    $('.menu__item').slideToggle(500, function () {
      if ($('.menu__item').css('display') === "none") {
        $(this).removeAttr('style');
      }
    });


    if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }

  });



  

});
