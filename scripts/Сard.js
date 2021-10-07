
export class Card {
  constructor(name, link, cardSelector, elementClickHandler) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._elementClickHandler = elementClickHandler;
  }
  _getTemplate() {
    return document.querySelector('.elements__list').content.querySelector('.element').cloneNode(true);
}

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
  _likeCard() {
    const buttonLike = this._element.querySelector(".card__like-button");
    buttonLike.classList.toggle('element__like_up');
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => {
        this._likeCard();
      });
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._element
      .querySelector(".element__photo")
      .addEventListener("click", this._elementClickHandler);
  }
}
