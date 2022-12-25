
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

// ОПРЕДЕЛЕНИЕ ПЕРЕМЕННЫХ ДЛЯ ПОПАПОВ (выбор DOM - элементов)
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
const PopupformEditProfile = document.querySelector('.popup__form_edit-profile');

//открытие попапа добавления картинки - выбор переменных
const NewPlaceElement = document.querySelector('.popup_type_new-place');
const popupAddButton= document.querySelector('.profile__add-button');
const popupInputNewPlace = NewPlaceElement.querySelector('.popup__input_type_place');
const popupInputLinkPlace = NewPlaceElement.querySelector('.popup__input_type_link');
const popupCloseAddButton = NewPlaceElement.querySelector('.popup__close');
const popupSubmitAddButton = NewPlaceElement.querySelector('.popup__button');
const popupFormAdd = NewPlaceElement.querySelector('.popup__form-new-place');

// открытие и закрытие попапа - ФУНКЦИЯ универсальная
const openPopup = function(popupElement)
{popupElement.classList.add('popup_active')};
const closePopup = function(popupElement) {
popupElement.classList.remove('popup_active')
};

//Открытие и закрытие редактирования профиля
popupOpenButtonElement.addEventListener('click', function(){
    openPopup(popupEditProfile);
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
  });
  
  popupCloseButtonElement.addEventListener('click', function() {
    closePopup(popupEditProfile);
  });
  
  const handleSubmitProfile = (event) => {
    event.preventDefault();
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    closePopup(popupEditProfile);
  };
  
  PopupformEditProfile.addEventListener('submit', handleSubmitProfile);
  
  
  //Открытие и закрытие добавления карточки
  popupAddButton.addEventListener('click', function() {
    openPopup(NewPlaceElement);
    popupInputNewPlace.value = '';
    popupInputLinkPlace.value = '';
  });
  
  popupCloseAddButton.addEventListener('click', function() {
    closePopup(NewPlaceElement);
  });
  
  const handleSubmitAddCard = (event) => {
      event.preventDefault();
      renderCard({
          name: popupInputNewPlace.value,
          link: popupInputLinkPlace.value
      });
      closePopup(popupAddButton);
  };
  
  popupFormAdd.addEventListener('submit', handleSubmitAddCard);

//Создание карточки

const cardsContainer = document.querySelector('.places');
const CardTemplate = document.querySelector('#places-template').content.querySelector('.places__item')

// открытие попапа с большой картинкой - выбор переменных

const popupZoom = document.querySelector('popup_type_zoom');
const popupImageContainer = document.querySelector('.popup__image-container');
const popupOpenBigImage = popupImageContainer.querySelector('.popup-zoomm');
const PopupCloseZoom = popupImageContainer.querySelector('.popup__close'); 
const popupImage = document.querySelector('.places__img');
const popupOpenZoom = popupImageContainer.querySelector('.popup__img-zoom');
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

const handlepopupOpenBigImageClick = (e) => {
    openPopup(popupZoom);
    /*
    popupOpenZoom.alt = e.target.closest('.places__item').querySelector('.places__capture').textContent;
    popupImageCapture.textContent = e.target.closest('.places__item').querySelector('.places__capture').textContent;
*/
  };
  
  
  PopupCloseZoom.addEventListener('click', function() {
    closePopup(popupZoom);
});


const renderCard = (card) => {
    cardsContainer.prepend(createCard(card));
};

initialCards.forEach((card) => {
    renderCard(card);
});


