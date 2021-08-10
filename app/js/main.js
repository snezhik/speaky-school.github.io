$(function(){

  $('.menu__btn').on('click', function(){
    $('.header__top-links').toggleClass('header__top-links--active');
  });




  wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animate__animated', 
    offset:       0,         
    mobile:       true,      
    live:         true        
  }
  )
  wow.init();

  $('.slider__inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });

  $('.trial__tabs-top-item').on('click', function(e){
    e.preventDefault();
    $('.trial__tabs-top-item').removeClass('trial__tabs-top-item--active');
    $(this).addClass('trial__tabs-top-item--active');

  });

  $('.select-style').styler();
});
