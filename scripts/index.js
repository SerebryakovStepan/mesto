import {
  popupImage, 
  openPopup,
  closePopup
} from "./utilities.js";
import { Card } from './Сard.js';
import FormValidator from "./FormValidator.js";


const openEditProfilePopupBtn = document.querySelector('.profile__edit-button');
const profilAddButton = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');  
const popupAdd = document.querySelector('.popup-card');
const popupCloseButton = popupEditProfile.querySelector(".popup__close-button");
const elementDeleteButton = document.querySelector('.element__delete');
const formElementAddCard = document.querySelector('.popup__form')
const nameInput = document.querySelector('#profile__name');
const jobInput = document.querySelector('#profile-caption');
const userName = document.querySelector('.profile__name')
const aboutUser = document.querySelector('.profile__description')
const list = document.querySelector('.elements');
const closeImageBtn = document.querySelector('.popup__close-button');

const urlcard = document.querySelector('#photo-link');
const nameCard = document.querySelector('#photo-namecard');

function openPofilePopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  jobInput.value = aboutUser.textContent;
}

function closePofilePopup() {
  closePopup(popupEditProfile);
}

// Попапа редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutUser.textContent = jobInput.value;
  closePofilePopup();
  validFormProfile.toggleButtonState();
}

// Попапа формы добавления карточки
function formSubmitCard(evt) { 
  evt.preventDefault(); 
  renderCard(urlcard.value, nameCard.value); 
  nameCard.value = ''; 
  urlcard.value = ''; 
  closePopup(popupAdd); 
  validformSubmitCard.toggleButtonState();
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//загрузка карточек из массива
function renderCard(name, link) {
  const card = createCard(name, link)
  list.prepend(card.generateCard());
}

function createCard(nameCard, urlcard) {
  return new Card(nameCard, urlcard,  '.elements', elementClickHandler);
}

function renderInitialCards() {
  initialCards.forEach((card) => renderCard(card.name, card.link))
}

renderInitialCards();

function elementClickHandler(event) {
  const imgSrc = event.target.src;
  const nameImg = event.target.parentNode.textContent
  openPopup(popupImage);
  document.querySelector('.popup__image').src = imgSrc;
  document.querySelector('.popup__title').textContent = nameImg;
}


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form-error',
  errorClass: 'popup__error_visible'
};

openEditProfilePopupBtn.addEventListener('click', openPofilePopup);
popupCloseButton.addEventListener('click', closePofilePopup);
popupEditProfile.addEventListener('submit', formSubmitHandler);
formElementAddCard.addEventListener('submit', formSubmitCard);
closeImageBtn.addEventListener('click', popupImage);
profilAddButton.addEventListener('click', () => openPopup(popupAdd));
/*elementDeleteButton.addEventListener('click', () => closePopup(popupAdd));
closeImageBtn.addEventListener('click', () => closePopup(popupImage));

const validformSubmitCard = new FormValidator(validationConfig, popupAdd);
validformSubmitCard.enableValidation();
const validFormProfile = new FormValidator(validationConfig, popupProfile);
validFormProfile.enableValidation();*/