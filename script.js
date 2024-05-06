//card slider

$(document).ready(function(){
    $('.card_container').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        prevArrow:"<button type='button' class='arrow_left' style='display: flex'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:"<button type='button' class='arrow_right' style='display: flex'><i class='fa-solid fa-arrow-right'></i></button>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
  });

// Page nav

const isInViewport = function(el) {
    const percentVisible = 40;
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

var page1 = document.querySelector('.page-one');
var page2 = document.querySelector('.page-two');
var page3 = document.querySelector('.page-three');
var page4 = document.querySelector('.page-four');
var page5 = document.querySelector('.page-five');
var dot1 = document.querySelector('.dot-1');
var dot2 = document.querySelector('.dot-2');
var dot3 = document.querySelector('.dot-3');
var dot4 = document.querySelector('.dot-4');
var dot5 = document.querySelector('.dot-5');

  
if (isInViewport(page1)) {
    dot1.classList.add('dots-active');
  }

document.addEventListener('scroll', function() {
  
  if (isInViewport(page1)) {
    dot1.classList.add('dots-active');
  } else {
    dot1.classList.remove('dots-active');
  }
  
  if (isInViewport(page2)) {
    dot2.classList.add('dots-active');
  } else {
    dot2.classList.remove('dots-active');
  }
  
  if (isInViewport(page3)) {
    dot3.classList.add('dots-active');
  } else {
    dot3.classList.remove('dots-active');
  }

  if (isInViewport(page4)) {
    dot4.classList.add('dots-active');
  } else {
    dot4.classList.remove('dots-active');
  }

  if (isInViewport(page5)) {
    dot5.classList.add('dots-active');
  } else {
    dot5.classList.remove('dots-active');
  }
  
});
  

