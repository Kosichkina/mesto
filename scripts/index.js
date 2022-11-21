/*Проверить подключение скрипта, console.log('Привет, Мир')

/*выбор DOM -элементов*/
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputDescription = popupElement.querySelector('.popup__input_type_description');
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__info');
const formElement = document.querySelector('.popup__form');


const openPopup = function () {
    popupElement.classList.add('popup_active');
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
};

const closePopup = function () {
    popupElement.classList.remove('popup_active');
};
/*Регистрация обработчика событий по клику */
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);


