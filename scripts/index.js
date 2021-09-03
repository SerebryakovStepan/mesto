let openPopupButton = document.querySelector(".profile__edit-button");
const profilAddButton = document.querySelector(".profile__add-button");
let popupEeditProfile = document.querySelector(".popup_edit-profile");
let popupCloseButton = popupEeditProfile.querySelector(".popup__close-button");
let userName = document.querySelector(".profile__name");
let aboutUser = document.querySelector(".profile__description");
let nameInput = document.querySelector("#profile-name");
let jobInput = document.querySelector("#profile-caption");
let formProfile = popupEeditProfile.querySelector(".form_profile");

const popupAdd = document.querySelector(".popup-card");

const popupAddCloseButton = popupAdd.querySelector(".popup-card__close-button");
const formCard = popupAdd.querySelector('.form-card');
const nameCard = popupAdd.querySelector('#photo-name');
const urlCard = popupAdd.querySelector('#photo-link');

const OpenImage = document.querySelector('.popup_open-image');
const homeImage = OpenImage.querySelector('.popup__image');
const homeImageTitle = OpenImage.querySelector('.popup__title');
const closeImage = OpenImage.querySelector('.popup__close-button');

function togglePopup(popupEeditProfile) {
  if (!popupEeditProfile.classList.contains("popup_is-opened")) {
    nameInput.value = userName.textContent;
    jobInput.value = aboutUser.textContent;
  }
  popupEeditProfile.classList.toggle("popup_is-opened");
}

//open-close
popupCloseButton.addEventListener("click", () => {
  togglePopup(popupEeditProfile);
});
openPopupButton.addEventListener("click", () => {
  togglePopup(popupEeditProfile);
});
profilAddButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});
popupAddCloseButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});
closeImage.addEventListener("click", () => {
  togglePopup(OpenImage);
});

//save
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  aboutUser.textContent = jobInput.value;

  togglePopup(popupEeditProfile);
});


formCard.addEventListener("submit", function (event) {
  event.preventDefault();

  renderCard({name: nameCard.value, link: urlCard.value});

  formCard.reset()
  togglePopup(popupAdd);
});

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const cardTemplate = document.querySelector(".template-card").content.querySelector(".element");
const list = document.querySelector('.elements__list');

initialCards.forEach((data) => {
 renderCard(data)
});

function renderCard(data) {
  list.prepend(createCard(data));
};

function likeClik(elementLikeButton) {
  elementLikeButton.classList.toggle("element__like_up");
};


//delete
function handDeletClick() {
  event.target.closest('.element').remove();
};

function createCard(data){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__photo");
  const cardTitle = cardElement.querySelector(".element__title");
  const elementLikeButton = cardElement.querySelector(".element__like");
  const elementDeleteButton = cardElement.querySelector(".element__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt =data.name;
  
  

  elementLikeButton.addEventListener('click', () => {
    likeClik(elementLikeButton);
  });

  elementDeleteButton.addEventListener('click', () => {
   handDeletClick()
  });
  
 
 cardImage.addEventListener('click', (event) => {
  homeImage.src = event.target.src;
  homeImage.alt = homeImageTitle.textContent = event.target.closest('.element')
  .querySelector('.element__title').textContent;
  homeImageTitle.textContent = event.target.closest('.element')
  .querySelector('.element__title').textContent;
   
  togglePopup(OpenImage);
 });
 return cardElement;
};
