const openModalCallBtn = document.querySelector('.interaction-list__call-btn');
const openModalFeedbackBtn = document.querySelector('.interaction-list__feedback-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay--modal');
const closeModalBtn = document.querySelector('.modal__close-btn');
const modalTitle = document.querySelector('.modal__title .title__text')

function openModalCall () {
  modal.classList.add('modal--call');
}

function openModalFeedBack () {
  modal.classList.add('modal--feedback');
}

function openModal () {
  modal.classList.add('modal--open');
  overlay.classList.add('overlay--on');
  overlay.addEventListener('click', overlayClickHandler);
  document.addEventListener('keydown', escapeKeyDownHandler);
  closeModalBtn.addEventListener('click', closeMenuBtnClickHandler);
}

function closeModal () {
  modal.classList.remove('modal--open');
  modal.classList.remove('modal--call');
  modal.classList.remove('modal--feedback');
  overlay.classList.remove('overlay--on');
  overlay.removeEventListener('click', overlayClickHandler);
  document.removeEventListener('keydown', escapeKeyDownHandler);
  closeModalBtn.removeEventListener('click', closeMenuBtnClickHandler);
}

function closeMenuBtnClickHandler() {
  closeModal();
}

function overlayClickHandler() {
  closeModal();
}

function escapeKeyDownHandler(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

openModalCallBtn.addEventListener('click', function openMenuHandler () {
  modalTitle.textContent = "Заказать звонок";

  openModal();
  openModalCall();
});

openModalFeedbackBtn.addEventListener('click', function openMenuHandler () {
  modalTitle.textContent = "Обратная связь";

  openModal();
  openModalFeedBack();
});
