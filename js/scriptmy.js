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
//? Second Slider
const swipe2 = new Swiper(".swiper-container2", {
  navigation: {
    nextEl: ".swiper-button-nextt2",
    prevEl: ".swiper-button-prevv2",
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


//? First Slider
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

let scroll = document.querySelectorAll(".header__a");

scroll.forEach((item) => {
  item.addEventListener("click", function Scrolleasyss(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});

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

//! Заготовка табов на чистом js

let tablinka = document.querySelectorAll(".skills__atab");
let connect_tabs = document.querySelectorAll(".skills__connecttab");

tablinka.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let data = e.target.getAttribute("href");

    tablinka.forEach((child) => {
      child.classList.remove("active");
    });

    connect_tabs.forEach((child) => {
      child.classList.remove("active");
    });

    item.classList.add("active");

    document.querySelector(data).classList.add("active");
  });
  // ! Надо изменить чтобы не было засореное 
  document.querySelector(".skills__atab").click();
});

//! Заготовка табов на чистом js

let aboutme = document.querySelector(".about-me__aa");
aboutme.onclick = (e) => {
  e.preventDefault();
  document.querySelector(".about-me__textsecond").classList.add("active");
  aboutme.remove();
};

let hover = document.querySelectorAll(".contact__link");
let alltextopac = document.querySelectorAll(".contact__opacitytext");
hover.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let text = item.lastElementChild;

    text.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    let text = item.lastElementChild;

    text.classList.remove("active");
  });
});
