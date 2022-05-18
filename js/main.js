const body = document.querySelector('.page__body');
const btnMenu = body.querySelector('.button--burger');
const navMenu = body.querySelector('.header__nav');
const navItems = body.querySelectorAll('.header__nav-item a');
const popup = body.querySelector('.popup');
const btnsOpenModal = body.querySelectorAll('[data-modal]');
const btnCloseModal = body.querySelector('[data-close]');
const overlay = body.querySelector('.overlay');
const main = body.querySelector('.main');
const header = body.querySelector('.header');
const form = body.querySelector('.form-callback');
const numberField = form.querySelector('#number');
const commentField = form.querySelector('#comment');
const btnSubmit = form.querySelector('#submit');

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

function openModal() {
  toggleClass('show');
}

function closeModal() {
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
      closeModal();
    }
  }, { once: true });
}

if (popup || overlay) {
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

btnMenu.addEventListener('click', btnMenuHandler);

navItems.forEach(item => item.addEventListener('click', btnMenuHandler));

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal();

    if (evt.target.parentElement.querySelector('.rates__item-quantity')) {
      commentField.value = evt.target.parentElement.querySelector('.rates__item-quantity').textContent;
    }

    escRemover();
  });
});

const message = {
  loading: 'img/form/spinner.svg',
  success: 'Спасибо! Скоро мы с вами свяжемся',
  failure: 'Что-то пошло не так... Попробуйте повторить.',
};

const showThanksModal = (message) => {

  form.style.display = 'none';
  popup.style.height = '180px';
  openModal();

  const thanksModal = document.createElement('form');
  thanksModal.classList.add('form-callback');
  thanksModal.innerHTML = `
    <p>${message}</p>
  `;

  popup.append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    form.style.display = '';
    popup.style.height = '';
    closeModal();
  }, 4000);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const statusMessage = document.createElement('img');

  statusMessage.src = message.loading;
  statusMessage.style.cssText = `
    display: block;
    margin: 0 auto;
  `;

  btnSubmit.style.display = 'none';
  btnSubmit.insertAdjacentElement('afterend', statusMessage);

  const formData = new FormData(form);
  const URL = 'https://gooddeloNotify.tojefin.repl.co/api/v1/sendform/';

  let data = new URLSearchParams();

  for (let pair of formData) {
      data.append(pair[0], pair[1]);
  }

  data.append('getStatus', 'true');

  fetch(URL, {
      method: 'post',
      body: data,
  }).then(() => {
    btnSubmit.style.display = 'block';
    showThanksModal(message.success);
    closeModal();
    statusMessage.remove();
  }).catch(() => {
    showThanksModal(message.failure);
  }).finally(() => {
    form.reset();
  });
});
