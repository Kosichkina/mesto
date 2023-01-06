// ОПРЕДЕЛЕНИЕ ПЕРЕМЕННЫХ ДЛЯ ПОПАПОВ (выбор DOM - элементов)
// открытие попапа профиля

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCloseButtonProfileElement = popupEditProfile.querySelector('.popup__close');
const popupOpenButtonProfileElement = document.querySelector('.profile__edit-button');
const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
const profileElement = document.querySelector('.profile'); 
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__info');
const popupformEditProfile = popupEditProfile.querySelector('.popup__form_edit-profile');
const popupForm = document.querySelector('.popup__form');
  

//открытие попапа добавления картинки - выбор переменных
const popupNewPlaceElement = document.querySelector('.popup_type_new-place');
const buttonOpenPopupAdd= document.querySelector('.profile__add-button');
const popupInputNewPlace = popupNewPlaceElement.querySelector('.popup__input_type_place');
const popupInputLinkPlace = popupNewPlaceElement.querySelector('.popup__input_type_link');
const buttonClosePopupAdd = popupNewPlaceElement.querySelector('.popup__close');
const popupSubmitAddButton = popupNewPlaceElement.querySelector('.popup__button');
const popupFormAdd = popupNewPlaceElement.querySelector('.popup__form-new-place');

// открытие и закрытие попапа - ФУНКЦИЯ универсальная

/*
const openPopup = function (popup) { 
    popup.classList.add('popup_active');
}
const closePopup = function(popup) {
    popup.classList.remove('popup_active')
}
*/

//закрытие попапа  ESC

const closePopupEsc = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  };
}

//закрытие попапа OVERLAY

const closePopupOverlay = (event) => {
  if(event.target === event.currentTarget) {
    closePopup(event.target);
  };
}


//открытие попапа
const openPopup = function(popup) {
 popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);  
};

//закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);  
};


//Открытие и закрытие редактирования профиля
popupOpenButtonProfileElement.addEventListener('click', function(){
    openPopup(popupEditProfile);
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
  });
  
  popupCloseButtonProfileElement.addEventListener('click', function() {
    closePopup(popupEditProfile);


  });
  
  const handleSubmitProfile = (event) => {
    event.preventDefault();
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    closePopup(popupEditProfile);
  };

  popupformEditProfile.addEventListener('submit', handleSubmitProfile);
  
  
  //Открытие и закрытие добавления карточки
  buttonOpenPopupAdd.addEventListener('click', function() {
    openPopup(popupNewPlaceElement);
    popupFormAdd.reset();
  });
  
  buttonClosePopupAdd.addEventListener('click', function() {
    closePopup(popupNewPlaceElement);
  });
  
  const handleSubmitAddCard = (event) => {
      event.preventDefault();
      renderCard({
          name: popupInputNewPlace.value,
          link: popupInputLinkPlace.value,
      });
      closePopup(buttonClosePopupAdd);
  };
  
  popupFormAdd.addEventListener('submit', handleSubmitAddCard);

//Создание карточки

const cardsContainer = document.querySelector('.places');
const CardTemplate = document.querySelector('#places-template').content.querySelector('.places__item')

// открытие попапа с большой картинкой - выбор переменных

const popupZoom = document.querySelector('.popup_type_zoom');
const popupImageContainer = document.querySelector('.popup__image-container');
const popupOpenBigImage = popupImageContainer.querySelector('.popup-zoomm');
const popupCloseZoom = popupImageContainer.querySelector('.popup__close'); 
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

    popupOpenZoom.src = e.target.src;
    popupOpenZoom.alt = e.target.alt;
    popupImageCapture.textContent = e.target.alt;
    /*
    popupImageCapture.textContent = e.target.closest('.places__item').querySelector('.places__capture').textContent;
*/
  };
  
  
  popupCloseZoom.addEventListener('click', function() {
    closePopup(popupZoom);
});


const renderCard = (card) => {
    cardsContainer.prepend(createCard(card));
};

initialCards.forEach((card) => {
    renderCard(card);
});


  