const openEditProfilePopupBtn = document.querySelector(".profile__edit-button");
const profilAddButton = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupCloseButton = popupEditProfile.querySelector(".popup__close-button");
const userName = document.querySelector(".profile__name");
const aboutUser = document.querySelector(".profile__description");
const nameInput = document.querySelector("#profile-name");
const jobInput = document.querySelector("#profile-caption");
const formProfile = popupEditProfile.querySelector(".form_profile");

const popupAdd = document.querySelector(".popup-card");

const popupAddCloseButton = popupAdd.querySelector(".popup-card__close-button");
const formCard = popupAdd.querySelector('.form-card');
const nameCard = popupAdd.querySelector('#photo-name');
const urlCard = popupAdd.querySelector('#photo-link');

const popupImage = document.querySelector('.popup_open-image');
const zoomedImage = popupImage.querySelector('.popup__image');
const zoomedImageTitle = popupImage.querySelector('.popup__title');
const closeImageBtn = popupImage.querySelector('.popup__close-button');

function togglePopup(popup) {
  popup.classList.toggle("popup_is-opened");
}

//open-close
popupCloseButton.addEventListener("click", () => {
  togglePopup(popupEditProfile);
});
openEditProfilePopupBtn.addEventListener("click", () => {
  if (!popup.classList.contains("popup_is-opened")) {
    nameInput.value = userName.textContent;
    jobInput.value = aboutUser.textContent;
  }
  togglePopup(popupEditProfile);
});
profilAddButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});
popupAddCloseButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});
closeImageBtn.addEventListener("click", () => {
  togglePopup(popupImage);
});

//save
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  aboutUser.textContent = jobInput.value;

  togglePopup(popupEditProfile);
});


formCard.addEventListener("submit", function (event) {
  event.preventDefault();

  renderCard({name: nameCard.value, link: urlCard.value});

  formCard.reset()
  togglePopup(popupAdd);
});


const cardTemplate = document.querySelector(".template-card").content.querySelector(".element");
const list = document.querySelector('.elements__list');

initialCards.forEach((data) => {
 renderCard(data)
});

function renderCard(data) {
  list.prepend(createCard(data));
};

function toggleLike(elementLikeButton) {
  elementLikeButton.classList.toggle("element__like_up");
};


//delete
function deleteCard() {
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
    toggleLike(elementLikeButton);
  });

  elementDeleteButton.addEventListener('click', () => {
   deleteCard()
  });
  
 
 cardImage.addEventListener('click', (event) => {
  zoomedImage.src = event.target.src;
  zoomedImage.alt = zoomedImageTitle.textContent = event.target.closest('.element')
  .querySelector('.element__title').textContent;
  zoomedImageTitle.textContent = event.target.closest('.element')
  .querySelector('.element__title').textContent;
   
  togglePopup(popupImage);
 });
 return cardElement;
};
