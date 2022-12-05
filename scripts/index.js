/*Проверить подключение скрипта, console.log('Привет, Мир')

/*выбор DOM - элементов 
инструмент querySelector. Он работает как функция и принимает на вход селектор класса элемента, 
к которому вы хотите получить доступ
доступ к инструментам осуществляется через символ точки
*/
/*Выбор DOM-элементов для ПР-4
*/
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputDescription = popupElement.querySelector('.popup__input_type_description');
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__info');
const formElement = document.querySelector('.popup__form');

/*Выбор DOM-элементов для ПР-5
*/
const popupNewPlaceElement = document.querySelector('.popup-new-place');
const popupADDOpenButtonElement = document.querySelector('.profile__add-button');
const popupInputPlace = popupNewPlaceElement.querySelector('.popup__input_type_place');
const popupInputLink = document.querySelector('.popup__input_type_link');
const editPlaceTitleElement = document.querySelector('.popup-new-place__title');



/*Открытие попапа (ПР-4) */
const openPopup = function () {
    popupElement.classList.add('popup_active');
    /*popupElement.classList.toggle('popup_opened');*/
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
    popupInputPlace.value = editPlaceTitleElement.textContent;
    popupInputLink.value = Ссылка.textContent;


};
/*Закрытие попапа */
const closePopup = function () {
    popupElement.classList.remove('popup_active');
};
/*Регистрация обработчика событий по клику */
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupADDOpenButtonElement.addEventListener('click', openPopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
/*ПР-5 
smoothly ('popup', 'popup_active', profileTitleElement.textContent, profileSubtitleElement.textContent,);

*/
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

const initialCardsEl = document.querySelector('.places');
const TemplateElement = document.querySelector('.places-template').content.querySelector('.places__item');
const createElement = item => {
const card = TemplateElement.cloneNode(true);
const cardTitle = card.querySelector('.places__capture');
const cardImg = card.querySelector('.places__img');

const cardsLikeButton = card.querySelector('.places__like');
const cardsDeleteButton = card.querySelector('.places__delete-button');


cardTitle.textContent = item.name;
cardImg.src = item.link;
cardImg.alt = item.name;

return card;
}
