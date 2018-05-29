const hamburger = document.querySelector('.hamburger-menu-link');
const fullscreen = document.querySelector('.fullscreen-menu');
const closeButton = document.querySelector('.fullscreen-menu__close');
const fullscreenLink = document.querySelectorAll('.fullscreen-menu__item');


hamburger.addEventListener('click', function(event) {
    event.preventDefault();  
    fullscreen.classList.add('fullscreen-menu--visible');
});

closeButton.addEventListener('click', function(event){
    event.preventDefault(); 
    fullscreen.classList.remove('fullscreen-menu--visible');
});

for (i=0; i<fullscreen.length; i++) {
    fullscreenLink[i].addEventListener('click', function(event){
    event.preventDefault(); 
    fullscreen.classList.remove('fullscreen-menu--visible');
});}



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

var prev = document.querySelector('slider-arrow--left');
var next = document.querySelector('slider-arrow--right');
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

  //popup review
  const reviews = document.querySelector(".reviews__list");
  const openBttn = document.querySelectorAll(".reviews__view");
  const reviewPopup = document.querySelector(".full-review");

  for (i=0; i<openBttn.length; i++) {
    openBttn[i].addEventListener('click', function(e) {
        // console.log(e.target.parentNode);
        console.log(e.target);
        console.log(openBttn);
        
        //  if(e.target.classList.contains('reviews__view') {
       
        reviewPopup.style.display="flex";
        // }
    
    });

};

  const closePopup = document.querySelector(".full-review__close");
    closePopup.addEventListener('click', function(e) {
        e.preventDefault();
        reviewPopup.style.display="none";
    })



  window.addEventListener('click', function(e) {
      if (e.target == reviewPopup) {
        reviewPopup.style.display="none";
      }
  })


//One Page Scroll
const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile;

const setActiveMenuItem = itemEq => {
    $('.nav__item')
    .eq(itemEq)
    .addClass('nav__item--active')
    .siblings()
    .removeClass('nav__item--active');
}

const performTransition = sectionEq => {
    const position = `${-sectionEq * 100}%`;
    
    if (inScroll) return;
    inScroll = true;
    
    sections
    .eq(sectionEq)
    .addClass('active')
    .siblings()
    .removeClass('active');

    console.log();
    

    display.css ({
        transform: `translateY(${position})`,
        '-webkit-transform' : `translateY(${position})`
    });


    const transitionDuration = parseInt(display.css('transition-duration')) * 1000; 
    setTimeout (() => {
        inScroll = false;
        setActiveMenuItem(sectionEq);
	}, transitionDuration + 300); // зв 300мс проходит инерция мышки
};

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    // switch (direction) {
    //     case 'up' :
    //         performTransition(prevSection.index());
    //         break;
    //     case 'down' :
    //          performTransition(nextSection.index());
    //         break;
    // }

    if (direction == "up" && prevSection.length) {
        performTransition(prevSection.index());
    }
    if (direction == "down" && nextSection.length) {
        performTransition(nextSection.index());
    }
    
};

$(document).on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        const direction = deltaY > 0
            ? 'down'
            : 'up'
        scrollToSection(direction);
         
    },

    keydown: e => {
        switch (e.keyCode) {
            case 40:
            scrollToSection('down');
            break;
            case 38:
            scrollToSection('up');
            break;
        }
    },

    touchmove: e => e.preventDefault()
});

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    // const target = $(e.currentTarget).data('scroll-to');
    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    performTransition(target);
})

//Mobile


if (isMobile) {
    
    $(document).swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    const swipeDirection = direction == 'down' ? 'up' : 'down';
    scrollToSection(swipeDirection);
    //   $(this).text("You swiped " + direction );  
    }
  });
}
