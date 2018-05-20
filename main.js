const hamburger = document.querySelector('.hamburger-menu-link');
const fullscreen = document.querySelector('.fullscreen-menu');
const closeButton = document.querySelector('.fullscreen-menu__close');


hamburger.addEventListener('click', function(event) {
    event.preventDefault();  
    fullscreen.classList.add('fullscreen-menu--visible');
});

closeButton.addEventListener('click', function(event){
    event.preventDefault(); 
    fullscreen.classList.remove('fullscreen-menu--visible');
});

//горизонтальный аккордеон

const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-acc__item');


for (let i=0; i<menuItem.length; i++) {
    menuItem[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (menuItem[i].classList.contains('menu-acc__item--active')){
            menuItem[i].classList.remove('menu-acc__item--active');
            if (vw < 769) {
            accoContent[i].style.width = 0;
            }
        } else {
            for (let i=0; i<menuItem.length; i++) {
                if (menuItem[i].classList.contains('menu-acc__item--active')){
                    menuItem[i].classList.remove('menu-acc__item--active');
                    if (vw < 769) {
                        accoContent[i].style.width = 0;
                    }
                }
            }       
            menuItem[i].classList.add('menu-acc__item--active');

            if ( vw < 769 ) {
            accoContent[i].style.width = getWidth + 'px';
            }
        };
        
        
    });
};


menu.addEventListener('click', function(e){
    e.preventDefault();
    for (let i=0; i<menuItem.length; i++) {
        if (menuItem[i].classList.contains('menu-acc__item--active')){
            menuItem[i].classList.remove('menu-acc__item--active');
            if (vw < 769) {
            accoContent[i].style.width = 0;
            }
        }
    }
});

//динамическая ширина контента

var vw = window.innerWidth;
console.log(vw);
const accoContent = document.querySelectorAll('.menu-acc__content');

for (let i=0; i<menuItem.length; i++) {
    var style = getComputedStyle(menuItem[i]);
}
var getWidth = vw - parseInt(style.width) * menuItem.length;
console.log(getWidth);

//вертикальный аккордеон

const teamItem = document.querySelectorAll('.team-acc__item');

for (let i=0; i<teamItem.length; i++) {
    teamItem[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (teamItem[i].classList.contains('team-acc__item--active')){
            teamItem[i].classList.remove('team-acc__item--active');
        } else {
            for (let i=0; i<teamItem.length; i++) {
                if (teamItem[i].classList.contains('team-acc__item--active')){
                    teamItem[i].classList.remove('team-acc__item--active');
                }
            }       
        teamItem[i].classList.add('team-acc__item--active');
        };
        
        
    });
};

//burger slider

var prev = document.getElementsByClassName('slider-arrow--left');
var next = document.getElementsByClassName('slider-arrow--right');
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("burger__slide");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slides[slideIndex-1].style.display = "flex"; 
  }