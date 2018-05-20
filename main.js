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
            // if (vw < 769) {
            // accoContent[i].style.width = 0;
            // }
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
            // if (vw < 769) {
            // accoContent[i].style.width = 0;
            // }
        } else {
            for (let i=0; i<teamItem.length; i++) {
                if (teamItem[i].classList.contains('team-acc__item--active')){
                    teamItem[i].classList.remove('team-acc__item--active');
                    // if (vw < 769) {
                    //     accoContent[i].style.width = 0;
                    // }
                }
            }       
            teamItem[i].classList.add('team-acc__item--active');

            // if ( vw < 769 ) {
            // accoContent[i].style.width = getWidth + 'px';
            // }
        };
        
        
    });
};