const openMenuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay--menu');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const modal = document.querySelector('.modal');
const html = document.querySelector('html');

function openMenu () {

  menu.classList.add('menu--open');
  overlay.classList.add('overlay--on');
  html.classList.add('html--fixed');
  overlay.addEventListener('click', overlayClickHandler);
  document.addEventListener('keydown', escapeKeyDownHandler);
  closeMenuBtn.addEventListener('click', closeMenuBtnClickHandler);
}

function closeMenu () {

  menu.classList.remove('menu--open');
  overlay.classList.remove('overlay--on');
  html.classList.remove('html--fixed');
  overlay.removeEventListener('click', overlayClickHandler);
  document.removeEventListener('keydown', overlayClickHandler);
  closeMenuBtn.removeEventListener('click', closeMenuBtnClickHandler);
}

function closeMenuBtnClickHandler() {
  closeMenu();
}

function overlayClickHandler() {
  closeMenu();
}

function escapeKeyDownHandler(evt) {
  if (evt.key === 'Escape' && !modal.classList.contains('modal--open')) {
    closeMenu();
  }
}

openMenuBtn.addEventListener('click', function openMenuHandler () {
  openMenu();
});
