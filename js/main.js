$(window).on('scroll', function(){
    if($(this).scrollTop() > 500) {
        $('.header').css({'background-color' : 'rgba(58, 62, 100, 0.9)'})
    } else {
        $('.header').css({'background-color' : 'transparent'})
    } 
})


let menu = $('.header__adapt-nav').attr('data-isOpen');
$('.header__menu-open').click(() => {
    if(menu == 0) {
        $('.header__adapt-nav').css({'height' : '25px', 'paddingTop' : '2rem'});
        menu = 1;
    } else {
        $('.header__adapt-nav').css({'height' : '0', 'paddingTop' : '0'});
        menu = 0;
    }
})


const images = ['1.jpg', '11.jpg', '111.jpg'];
let currentImage = 2;

for (let i = 0; i < images.length; i++) {
  $('.slider__dots').append(`<div class="slider__dot" data-index="${i}"></div>`);
}

let setCurrentImage = function() {
  $(`.slider__dot`).removeClass('slider__dot--isActive');
  $(`.slider__dot[data-index="${currentImage}"]`).addClass('slider__dot--isActive');
  $('.slide__foto').css('background-image', `url('../ActiveBox/img/${images[currentImage]}')`);
}

$('.slider__dot').click(function() {
  currentImage = $(this).attr('data-index');
  setCurrentImage();
})

setCurrentImage();