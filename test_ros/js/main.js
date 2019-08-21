$(document).ready(function () {
  if ($('.btn').click(function () {
      $(".bl").css("display", "none");
      $(".hd").fadeIn("slow");
      $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //arrows: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: true,
        customPaging: function (slick, index) {
          return '<div class="item"><img class="fаf" src="img/mini.png" alt="Slider 2"/><div class="gf"><h2 class="subtitlee">Акция действует с 01.07.18</h2><h1 class="titlee"></h1>Этот текст добавлен для</br>демонстрации на странице</h1></div></div>'
        }
      });
    }));
});