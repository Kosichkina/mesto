
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

// ОПРЕДЕЛЕНИЕ ПЕРЕМЕННЫХ ДЛЯ ПОПАПОВ (выбор DOM -элементов)
// открытие попапа профиля

const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputDescription = popupElement.querySelector('.popup__input_type_description');
const profileElement = document.querySelector('.profile'); 
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__info');
const formElement = document.querySelector('.popup__form');

//открытие попапа добавления картинки
const NewPlaceElement = document.querySelector('.popup_type_new-place');
const popupAddButton= document.querySelector('.profile__add-button');
const popupInputNewPlace = NewPlaceElement.querySelector('.popup__input_type_place');
const popupInputLinkPlace = NewPlaceElement.querySelector('.popup__input_type_link')

// открытие и закрытие попапа профиля - функция (должна стать универсальной)
const openPopup = function(NewPlaceElemen){popupElement.classList.add('popup_active')};
const closePopup = function(NewPlaceElemen) {
popupElement.classList.remove('popup_active');
};

//Регистрация обработчика событий по клику 
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupAddButton.addEventListener('click', openPopup);

function formSubmitHandler (evt) {
    evt.preventDefault(popupEditProfile);
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
    closePopup(popupEditProfile);
};

formElement.addEventListener('submit', formSubmitHandler);



/*
function formSubmitHandler (evt) {
    evt.preventDefault(popupEditProfile);
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
    closePopup(popupEditProfile);
};

formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (evt) {
    evt.preventDefault(NewPlaceElement);
   
    closePopup(NewPlaceElement);
};

formElement.addEventListener('submit', formSubmitHandler);


  потому что тебе в функцию openPopup нужно передавать элемент Попапа который нужно открыть 
  openPopup(popupElement) { popupElement.classList.add('popup_active'); }
это всё что должна делать функция
а уже в обработчике клика на кнопку редактирования профиля 
присваиваешь значения в value инпутов и следом вызываешь эту функцию openPopup(popupEditProfile)
переменную popupEditProfile нужно определить вначале index.js и присвоить ей найденный попап
для этого нужно у каждого попапа использовать класс-модификатор
у тебя сейчас есть у попапа редактирования профиля дополнительный класс, 
но он не по БЭМ у тебя - popup-edit-profile а по БЭМ - popup_type_edit-profile

для других попапов по аналогии

ну вот тебе по аналогии с удалением и лайком нужно сделать 
cardImage.addEventListener('click', handleOpenBigImgClick)

а сам handleOpenBigImgClick должен быть вне createCard
и всё что ниже до returc Card лишее

*/


//Создание карточки

const cardsContainer = document.querySelector('.places');
const CardTemplate = document.querySelector('#places-template').content.querySelector('.places__item')

// открытие попапа с большой картинкой

const popupZoom = document.querySelector('popup_type_zoom');
const popupImageContainer = document.querySelector('.popup__image-container');
const popupOpenBigImage = popupImageContainer.querySelector('.popup-zoomm');
const PopupClose = popupImageContainer.querySelector('.popup__close'); // Общий для всех попапов
const popupImage = document.querySelector('.places__img');
const popupImageCapture = popupImageContainer.querySelector('.popup__capture-zoom');
// закончились переменные с большой картинкой

const createCard = (card) => {
    const Card = CardTemplate.cloneNode(true);
    const сardTitle = Card.querySelector('.places__capture');
    const cardImage = Card.querySelector('.places__img');
    const cardDeleteButton = Card.querySelector('.places__delete-button');
    const cardLikeButton = Card.querySelector('.places__like');



    сardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;


    cardDeleteButton.addEventListener('click', handleDeleteButtonClick);
    cardLikeButton.addEventListener('click', handleLikeButtonClick);
    cardImage.addEventListener('click', handlepopupOpenBigImageClick);

    return Card;

};
const handleDeleteButtonClick = (e) => {
    e.target.closest('.places__item').remove()
}
/*стрелочная функция по мотивам вебинара Максима Чечелева */

const handleLikeButtonClick = function (evt) {
    evt.target.classList.toggle('places__like_active')
};
/*в toggle (переключатель) перередается только селектор, не класс, поэтому пишется без точки*/
const handlepopupOpenBigImageClick = (event) => {
    openPopup(popupImage)};

const renderCard = (card) => {
    cardsContainer.prepend(createCard(card));

};

initialCards.forEach((card) => {
    renderCard(card);

    

});


  /*
// открытие и закрытие попапа с большой картинкой

const handleOpenBigImageClick = (event) => {
    openPopup(popupImage);
    popupOpenBigImage.src = event.target.src;
    popupOpenBigImage.alt = event.target.closest('places__item').querySelector('places__capture').textContent;
    popupImageCapture.textContent = event.target.closest('.places__item').querySelector('places__capture').textContent;
};

popupOpenBigImage.addEventListener('click', handleOpenBigImageClick);
PopupClose.addEventListener('click', function () {
    closePopup(popupImage);
});

*/