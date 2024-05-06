
$(document).ready(function(){
    $('.card_container').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        prevArrow:"<button type='button' class='arrow_left' style='display: flex'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:"<button type='button' class='arrow_right' style='display: flex'><i class='fa-solid fa-arrow-right'></i></button>"
    });
  });

  

