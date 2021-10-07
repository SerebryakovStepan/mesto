export {
    popupImage,
    openPopup,
    closePopup,
};
const popupImage = document.querySelector(".popup_open-image");

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
    popup.addEventListener('click', closeOnOverlay);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
    popup.removeEventListener('click', closeOnOverlay);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const popupIsOpened = document.querySelector('.popup_is-opened')
        closePopup(popupIsOpened);
    }
}


function closeOnOverlay(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closePopup(evt.target)
    }
}