let openPopupButton = document.querySelector(".profile__edit-profile");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-button");
let userName = document.querySelector(".profile__name");
let aboutUser = document.querySelector(".profile__description");
let nameInput = document.querySelector("#profile-name");
let jobInput = document.querySelector("#profile-caption");
let form = document.querySelector(".form");

function togglePopup() {
  if (!popup.classList.contains("popup_is-opened")) {
    nameInput.value = userName.textContent;
    jobInput.value = aboutUser.textContent;
  }
  popup.classList.toggle("popup_is-opened");
}

popupCloseButton.addEventListener("click", function () {
  togglePopup();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  aboutUser.textContent = jobInput.value;

  togglePopup();
});

openPopupButton.addEventListener("click", togglePopup);
popupCloseButton.addEventListener("click", togglePopup);
