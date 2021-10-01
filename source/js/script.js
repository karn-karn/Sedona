var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navLogo = document.querySelector('.page-header__logo');
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navLogo.classList.add('page-header__logo--nav-opened');

    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navLogo.classList.remove('page-header__logo--nav-opened');
    }
  });

const formSent = document.querySelector(".form__button");
const formPopup = document.querySelector(".modal-success");
const formClose = formPopup.querySelector(".modal-success__button");


formSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("js-modal-show");
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("js-modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("js-modal-show")) {
      evt.preventDefault();
      formPopup.classList.remove("js-modal-show");
    }
  }
});
