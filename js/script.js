$(document).ready(function(){
    $('.anounce__inner-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 400,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,

    });
    $('.slider__type').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true

    });
    $('.watching__wraper').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 400,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive:[
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 881,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                }
            }
        ]
    });
});
/* navtoggle */
let navToggle = document.querySelector('.nav-toggle');
let navMenu = document.querySelector('.nav-menu');
let close = document.querySelector('.close');
let footerWrapperTitle = document.querySelectorAll('.footer__wrapper-title');

navToggle.addEventListener('click', function(){
    navMenu.style.display = "block";
});
close.addEventListener('click', function(){
    navMenu.style.display = "none";
});

footerWrapperTitle.forEach(icon => {
    icon.addEventListener('click', listOpen);
});
function listOpen(event){
    event.preventDefault();
    target = event.target;
    if(target.addEventListener.onclick = true){
        if(this.parentElement.childNodes[5].classList.contains('hidden')){
            this.parentElement.childNodes[5].classList.remove('hidden');
           }else{
            this.parentElement.childNodes[5].classList.add('hidden');
           }
    }     
   
}