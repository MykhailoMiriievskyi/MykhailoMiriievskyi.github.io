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


const images = ['1.png', '2.png', '3.png'];
let currentImage = 2;

for (let i = 0; i < images.length; i++) {
  $('.slide__dots').append(`<div class="slide__dot" data-index="${i}"></div>`);
}

let setCurrentImage = function() {
  $(`.slide__dot`).removeClass('slide__dot--isActive');
  $(`.slide__dot[data-index="${currentImage}"]`).addClass('slide__dot--isActive');
  $('.slide__foto').css('background-image', `url('../img/${images[currentImage]}')`);
}

$('.slide__dot').click(function() {
  currentImage = $(this).attr('data-index');
  setCurrentImage();
})

setCurrentImage();