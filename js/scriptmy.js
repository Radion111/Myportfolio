// Кнопка показать больше Showmore чистый джеес

let showmore = document.querySelector(".portfolio__showmore");
showmore.addEventListener("click", showMore);
function showMore() {
  showmore.classList.add("active");
  document.querySelector(".portfolio__addallfiles").classList.add("active");
}

// Метод ibg
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();

const swiperrr = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },

  pagination: {
    el: ".pag",
    clickable: true,
  },

  observer: true,
  observeParent: true,

  observeSlideChildren: true,

  slidesPerView: 1,

  loop: true,

  effect: "fade",
});

// для медленого перехода между прогрузками

$(document).ready(function () {
  $(".header__a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    return false;
  });
});

// Для картинок

//! burger menu на чистом js

let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", burgerMenu);
function burgerMenu() {
  burgermenu.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("active");
}

// ! Для бургер меню

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
    $(".burger-menu,.header__nav").toggleClass("active");
  });
});
$(document).ready(function () {
  $(".contact__link").hover(
    function () {
      $(this).find(".contact__opacitytext").slideToggle(300);
    },
    function () {
      $(this).find(".contact__opacitytext").slideToggle(300);
    }
  );
  
});
 
