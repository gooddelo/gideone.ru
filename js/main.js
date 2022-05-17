const body = document.querySelector('.page__body');
const btnMenu = body.querySelector('.button--burger');
const navMenu = body.querySelector('.header__nav');
const navItems = body.querySelectorAll('.header__nav-item a');
const popup = body.querySelector('.popup');
const btnsOpenPopup = body.querySelectorAll('[data-modal]');
const btnClosePopup = body.querySelector('[data-close]');
const overlay = body.querySelector('.overlay');
const main = body.querySelector('.main');
const header = body.querySelector('.header');
const form = body.querySelector('.form-callback');
const numberField = body.querySelector('#number');
const commentField = body.querySelector('#comment');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

if (numberField) {
    const validatePhone = (element) => {
    const inputPhoneMask = new Inputmask('+7 (999) 999-99-99');
    inputPhoneMask.mask(element);
  };
  validatePhone(numberField);
}

const btnMenuToggler = () => {
  if (window.innerWidth < 1024) {
    btnMenu.classList.toggle('button--close');
    navMenu.classList.toggle('header__nav--show');
    body.classList.toggle('page__body--hidden');
  }
};

const btnMenuHandler = () => btnMenuToggler();

function openPopup() {
  toggleClass('show');
}

function closePopup() {
  toggleClass('hide');
  form.reset();
  escRemover();
}

function toggler() {
  overlay.classList.toggle('overlay--hidden');
  popup.classList.toggle('popup--show');
  body.classList.toggle('page__body--hidden');
}

function setFilter(action) {
  if (action === 'show') {
    header.style.filter = 'blur(5px)';
    main.style.filter = 'blur(5px)';
  } else {
    header.style.filter = '';
    main.style.filter = '';
  }
}

function toggleClass(action) {
  switch (action) {
    case 'show':
      setFilter(action);
      toggler();
      break;
    case 'hide':
      toggler();
      setFilter(action);
      break;
  }
}

if (document.querySelector('.lazyframe')) {
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
}

function escRemover() {
  window.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt) && popup.classList.contains('popup--show')) {
      evt.preventDefault();
      closePopup();
    }
  }, { once: true });
}

if (popup || overlay) {
  btnClosePopup.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);
}

btnMenu.addEventListener('click', btnMenuHandler);

navItems.forEach(item => item.addEventListener('click', btnMenuHandler));

for (let btn of btnsOpenPopup) {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup();

    if (evt.target.parentElement.querySelector('.rates__item-quantity')) {
      commentField.value = evt.target.parentElement.querySelector('.rates__item-quantity').textContent;
    }

    escRemover();
  });
}
