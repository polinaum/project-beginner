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

  //reviews popup
  const reviews = document.querySelector(".reviews__list");
  const openBttn = document.querySelectorAll(".reviews__view");
  const popupText = document.querySelector('.full-review__content');
  const reviewPopup = document.querySelector(".full-review");

  for (i=0; i<openBttn.length; i++) {
    openBttn[i].addEventListener('click', function(e) {
        let modalText = e.target.parentNode.previousElementSibling.innerHTML;
        popupText.innerHTML = modalText;
        reviewPopup.style.display="flex";
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
const isMobile = mobileDetect.mobile();

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

    display.css ({
        transform: `translateY(${position})`,
        '-webkit-transform' : `translateY(${position})`
    });

    setActiveMenuItem(sectionEq);

    const transitionDuration = parseInt(display.css('transition-duration')) * 1000; 
    setTimeout (() => {
        inScroll = false;
	}, transitionDuration + 300); // зв 300мс проходит инерция мышки
};

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

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

    if (isMobile) {
    fullscreen.classList.remove('fullscreen-menu--visible');
    }
});


$('.arrow__link').on('click', e => {
    e.preventDefault();
    performTransition(1);
});

$('.order-link').on('click', e => {
    e.preventDefault();
    performTransition(6);
});



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

// order form 

$('#order-form').on('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
        data = form.serialize(),
        type = form.attr('method'),
        url = form.attr('action');

    console.log(data);
    console.log(type);
    console.log(url);

    var request = $.ajax ({
        type: type,
        url: url,
        dataType: 'JSON',
        data: data
    });

    request.done (function(msg){
        // alert(msg);
        var mes = msg.mes,
        status = msg.status;

        orderPopup.style.display="flex";
        alertText.textContent = mes;
        
    });

    request.fail(function(jqXHR, textStatus){
        orderPopup.style.display="flex";
        alertText.textContent="Произошла ошибка";
    })
};

//order popup

  const closeBttn = document.querySelector(".order-alert__close");
  const alertText = document.querySelector('.order-alert__message');
  const orderPopup = document.querySelector(".order-alert");

    closeBttn.addEventListener('click', function(e) {
        e.preventDefault();
        orderPopup.style.display="none";
    });

  window.addEventListener('click', function(e) {
      if (e.target == orderPopup) {
        reviewPopup.style.display="none";
      }
  });

  //yandex map
  ymaps.ready(init);

  var placemarks = [
      {
        latitude: 59.89,
        longitude: 30.42,
        hintContent:'ул.Бабушкина, д.12/1,15',
      }, 
      {
        latitude: 59.94533410, 
        longitude: 30.38214794,
        hintContent:'',
      },
      {
        latitude: 59.97425702, 
        longitude: 30.31005016,
        hintContent:'',
      },
      {
        latitude: 59.91480100,  
        longitude: 30.49001045,
        hintContent:'',
      }
  ]

  function init(){
      var map = new ymaps.Map('map', {
          center: [59.93351451, 30.33126544],
          zoom: 12,
          controls: ['zoomControl'],
          behaviors: ['drag'],
      });

      placemarks.forEach(obj => {
        var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
            hintContent: obj.hintContent
      },
        {
        iconLayout: 'default#image',
        iconImageHref: '/icons/map-marker.svg',
        iconImageSize: [46,57],
        iconImageOffset: [-23,-57],
        }); 
        map.geoObjects.add(placemark);  
      });
  }



