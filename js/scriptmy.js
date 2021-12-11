// Кнопка показать больше Showmore чистый джеес

let showmore = document.querySelector(".portfolio__showmore");
showmore.addEventListener("click", showMore);
function showMore() {
  showmore.classList.add("active");
  document.querySelector(".portfolio__addallfiles").classList.add("active");
}

// Метод ibg
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
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
// ! для медленой загрузки нужно знать роботу с пикселями пройти пару видосиков и зделать
// Это!!
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
// ! как лутше написать перемение в функции и визвать функцию из вне
// или перемен

let tablinka = document.querySelectorAll(".skills__atab");
let connect_tabs = document.querySelectorAll(".skills__connecttab");

tablinka.forEach((my) => {
  this.addEventListener("click", function tabsFunction() {
    this.classList.add("active");
  });
});

function f4() {
  alert("hello world");
}

// $(document).ready(function () {
//   $(".skills__atab").click(function (e) {
//     e.preventDefault();
//     $(".skills__atab").removeClass("active");
//     $(".skills__connecttab").removeClass("active");
//     $(this).addClass("active");
//     $($(this).attr("href")).addClass("active");
//   });
//   $(".skills__atab:first").click();
// });

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
