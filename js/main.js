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
        $('.header__adapt-nav').css({'height' : '35px', 'paddingTop' : '2rem'});
        menu = 1;
    } else {
        $('.header__adapt-nav').css({'height' : '0', 'paddingTop' : '0'});
        menu = 0;
    }
})