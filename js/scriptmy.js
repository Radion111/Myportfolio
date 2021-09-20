// для медленого скрола
$(document).ready(function () {
  $(".portfolio__showmore").click(function () { 
   
    $(".portfolio__addallfiles").addClass("active");
    $(".portfolio__showmore").addClass("active")
  });
  });
  
  function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();



const swiperrr = new Swiper('.swiper-container', 
{ 
navigation: {
nextEl:'.swiper-button-nextt',
prevEl:'.swiper-button-prevv',
 },


pagination: {
el:'.pag',
clickable: true,
}, 

observer: true,
observeParent: true,

observeSlideChildren: true,




slidesPerView: 1,

loop: true,

effect:'fade',


});



//  $(document).ready(function () {

//    $(".header__a").click(function () { 
     
//      $("html,body").animate({
//       scrollTop: $($(this).attr("href")).offset().top+"px"
//      }, {
//        duration:1000,
//        easing:"linear",
//      });
//      return false;
//    });
//  });


// burger menu

   
// Для картинок 

   $(document).ready(function() {
    $('.burger-menu').click(function(event) {
       $('.burger-menu,.header__nav').toggleClass('active');
       $('body').toggleClass('lock');
    });
    });
 
   
// Для табов СТАРАЯ ВЕРСИЯ
$(document).ready(function () {
  $(".skills__atab").click(function (e) { 
     e.preventDefault();
     $(".skills__atab").removeClass("active");
     $(".skills__connecttab").removeClass("active");
     $(this).addClass("active");
     $($(this).attr("href")).addClass("active");
  });
  $(".skills__atab:first").click();
});

$(document).ready(function () {
  $(".about-me__aa").click(function (e) { 
    e.preventDefault();
    $(".about-me__textsecond").addClass("active");
    $(this).remove();
  });
});

$(document).ready(function () {
  $(".header__a").click(function () { 
  
    $('.burger-menu,.header__nav').toggleClass('active');
  });
});
$(document).ready(function () {
  $(".contact__link").hover(function () {
      $(this).find(".contact__opacitytext").slideToggle(300);
      
    }
  );
});