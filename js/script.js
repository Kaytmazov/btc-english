// Слайдер
$(document).ready(function(){
  $('.promo-slider').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 4000,
    responsiveBaseElement: '.slider-container'
  });
});

// Отзывы
$(document).ready(function(){
  $('.reviews-slider').owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    navText: [
      '<i class="icon icon-left"></i>',
      '<i class="icon icon-right"></i>'
    ],
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2000
  });
});

// Анимация чисел
$(document).ready(function(){

  var show = true;
  var countbox = '.guarantees-section';

  $(window).on('scroll load', function(){
    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var e_height = $(countbox).outerHeight();

    if(w_top + 200 >= e_top){
      $('.spincrement').spincrement({
        thousandSeparator: '',
        duration: 5000
      });

      show = false;
    }
  });
});

// Анимация графика
$(document).ready(function(){

  var show = true;
  var countbox = '.guarantees-diagram';

  $(window).on('scroll load', function(){
    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var e_height = $(countbox).outerHeight();

    if(w_top + 200 >= e_top){
      $('.guarantees-diagram').addClass('active');

      show = false;
    }
  });
});

// Длы safari
$("form").submit(function(e) {
  var ref = $(this).find("[required]");
  $(ref).each(function(){
    if ( $(this).val() == '' )
    {
      alert("Заполните все обязательные поля.");

      $(this).focus();

      e.preventDefault();
      return false;
    }
  });  return true;
});













