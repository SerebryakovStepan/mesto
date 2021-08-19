let openPopupButton = document.querySelector(".profile__edit-profile");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-button");
let formFieldset = document.querySelector(".form__fieldset");
let userName = document.querySelector(".profile__name");
let aboutUser = document.querySelector(".profile__description");
let nameInput = document.querySelector("#profile-name");
let jobInput = document.querySelector("#profile-caption");
let form = document.querySelector(".form");
let formSaveButton = document.querySelector(".form__save-button");

function togglePopup() {
  if (!popup.classList.contains("popup_opened")) {
    nameInput.value = userName.textContent;
    jobInput.value = aboutUser.textContent;
  }
  popup.classList.toggle("popup_is-opened");
}

openPopupButton.addEventListener("click", togglePopup);
popupCloseButton.addEventListener("click", togglePopup);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  aboutUser.textContent = jobInput.value;

  popup.classList.toggle("popup_is-opened");

});

popupCloseButton.addEventListener('click', function () {togglePopup();});

