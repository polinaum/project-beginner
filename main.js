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

const menuTrigger = document.querySelectorAll('.menu-acc__trigger');
const menuItem = document.querySelectorAll('.menu-acc__item');

menuTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    e.target 
    menuItem.classList.add('menu-acc__item--active');
});