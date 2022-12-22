
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
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputDescription = popupElement.querySelector('.popup__input_type_description');
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__info');
const formElement = document.querySelector('.popup__form');

// открытие попапа с большой картинкой

const popupImageContainer = document.querySelector('.popup__image-container');
const popupOpenBigImage = popupImageContainer.querySelector('.popup-zoomm');
const PopupClose = popupImageContainer.querySelector('.popup__close'); // Общий для всех попапов
const popupImage = document.querySelector('.places__img');
const popupImageCapture = popupImageContainer.querySelector('.popup__capture-zoom');

// открытие и закрытие попапа профиля - функция
    
const openPopup = function () {
    popupElement.classList.add('popup_active');
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
};

const closePopup = function () {
    popupElement.classList.remove('popup_active');
};
//Регистрация обработчика событий по клику 
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);

// открытие и закрытие попапа с картинкой

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


//Создание карточки

const cardsContainer = document.querySelector('.places');
const CardTemplate = document.querySelector('#places-template').content.querySelector('.places__item')


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



const renderCard = (card) => {
    cardsContainer.prepend(createCard(card));

};

initialCards.forEach((card) => {
    renderCard(card);

});


  