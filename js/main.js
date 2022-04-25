const body = document.querySelector('.page__body');
const btnMenu = body.querySelector('.button--burger');
const navMenu = body.querySelector('.header__nav');
const navItems = body.querySelectorAll('.header__nav-item a');

const btnMenuToggler = () => {
  if (window.innerWidth < 1024) {
    btnMenu.classList.toggle('button--close');
    navMenu.classList.toggle('header__nav--show');
    body.classList.toggle('page__body--hidden');
  }
}

const btnMenuHandler = () => btnMenuToggler();

btnMenu.addEventListener('click', btnMenuHandler)

for (let item of navItems) {
  item.addEventListener('click', btnMenuHandler)
}
