const body = document.querySelector('.page__body');
const btnMenu = body.querySelector('.button--burger');
const navMenu = body.querySelector('.header__nav');
const navItems = body.querySelectorAll('.header__nav-item a');
const popup = body.querySelector('.popup');
const btnsOpenPopup = body.querySelectorAll('[name=btnOpenPopup]');
const overlay = body.querySelector('.overlay');
const main = body.querySelector('.main');
const header = body.querySelector('.header');
const form = body.querySelector('.form-callback')
const numberField = body.querySelector('#number');
const commentField = body.querySelector('#comment');

const btnClosePopup = body.querySelector('[name=btnClosePopup]');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const validatePhone = (element) => {
  const inputPhoneMask = new Inputmask('+7 (999) 999-99-99');
  inputPhoneMask.mask(element);
};

const btnMenuToggler = () => {
  if (window.innerWidth < 1024) {
    btnMenu.classList.toggle('button--close');
    navMenu.classList.toggle('header__nav--show');
    body.classList.toggle('page__body--hidden');
  }
}

const btnMenuHandler = () => btnMenuToggler();

for (let item of navItems) {
  item.addEventListener('click', btnMenuHandler);
}

for (let btn of btnsOpenPopup) {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup();
    if (evt.target.parentNode.querySelector('.rates__item-quantity')) {
      commentField.value = evt.target.parentNode.querySelector('.rates__item-quantity').textContent;
    }
    escRemover();
  })
}

function openPopup() {
  toggleClass('show');
}

function closePopup() {
  toggleClass('hide');
  form.reset();
  escRemover();
}

function toggleClass(action) {
  switch (action) {
    case 'show':
      header.style.filter = 'blur(5px)';
      main.style.filter = 'blur(5px)';
      overlay.classList.toggle('overlay--hidden');
      popup.classList.toggle('popup--show');
      body.classList.toggle('page__body--hidden');
      break;
    case 'hide':
      overlay.classList.toggle('overlay--hidden');
      popup.classList.toggle('popup--show');
      body.classList.toggle('page__body--hidden');
      header.style.filter = '';
      main.style.filter = '';
      break;
  }
}

function escRemover() {
  window.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt) && popup.classList.contains('popup--show')) {
      evt.preventDefault();
      closePopup()
    }
  }, { once: true })
}

btnClosePopup.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
btnMenu.addEventListener('click', btnMenuHandler);
validatePhone(numberField);

lazyframe('.lazyframe');

// Passing a nodelist
let elements = document.querySelectorAll('.lazyframe');
lazyframe(elements);

lazyframe(elements, {
  debounce: 250,
  lazyload: true,
  autoplay: true,

  // Callbacks
  onLoad: (lazyframe) => console.log(lazyframe),
  onAppend: (iframe) => console.log(iframe),
  onThumbnailLoad: (img) => console.log(img),
});
