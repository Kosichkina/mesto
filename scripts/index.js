import { Card } from "./Card.js";
//import { FormValidator } from "./FormValidator.js";

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
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupInputNewPlace = popupNewPlaceElement.querySelector('.popup__input_type_place');
const popupInputLinkPlace = popupNewPlaceElement.querySelector('.popup__input_type_link');
const buttonClosePopupAdd = popupNewPlaceElement.querySelector('.popup__close');
const popupSubmitAddButton = popupNewPlaceElement.querySelector('.popup__button');
const popupFormAdd = popupNewPlaceElement.querySelector('.popup__form-new-place');

// открытие и закрытие попапа - ФУНКЦИЯ универсальная

/*
const openPopup = function (popup) { 
    popup.classList.add('popup_active');
    в данном случае функция закрытия попапа принимает в качестве параметра элемент попапа.
     Вот мы его в начале находим, а затем передаём в функцию closePopup
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

function closePopupOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  };

}

//открытие попапа
const openPopup = function (popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener("click", closePopupOverlay)
};

//закрытие попапа
//мы объявляем функцию и сохраняем её в переменную. 
//popup - это параметр функции, который передаётся в момент её вызова

const closePopup = function (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener("click", closePopupOverlay)
};


//Открытие и закрытие редактирования профиля
//программирование кнопки
popupOpenButtonProfileElement.addEventListener('click', function () {
  openPopup(popupEditProfile);
  popupInputName.value = profileTitleElement.textContent;
  popupInputDescription.value = profileSubtitleElement.textContent;
});

popupCloseButtonProfileElement.addEventListener('click', function () {
  closePopup(popupEditProfile);


});
//Заполнение полей формы и программирование кноки Submit/сохранить/ добавить. Submit -это встроенное событие
const handleSubmitProfile = (event) => {
  event.preventDefault(); // чтобы не перегружалась страница 
  profileTitleElement.textContent = popupInputName.value;
  profileSubtitleElement.textContent = popupInputDescription.value;
  closePopup(popupEditProfile);
};
// добавляем слушатель на нажатие кнопки "сохранить"+ заполнение полей
popupformEditProfile.addEventListener('submit', handleSubmitProfile);


//Открытие и закрытие добавления карточки
buttonOpenPopupAdd.addEventListener('click', function () {
  openPopup(popupNewPlaceElement);
  popupFormAdd.reset();
});

buttonClosePopupAdd.addEventListener('click', function () {
  closePopup(popupNewPlaceElement);
});


const handleSubmitAddCard = (event) => {
  event.preventDefault();
  event.submitter.disabled = true;
  event.submitter.classList.add('popup__button_invalid');
  renderCard({
    name: popupInputNewPlace.value,
    link: popupInputLinkPlace.value,
  });
  closePopup(popupNewPlaceElement);
};

popupFormAdd.addEventListener('submit', handleSubmitAddCard);
/*У каждого элемента есть метод addEventListener, 
благодаря которому мы для события (первый параметр) назначаем функцию (2ой параметр)
когда произойдёт клик по кнопке у которой type="submit" то произойдёт событие с "sibmit" 
и выполнятся все функции-обработчики, 
которые были подписаны на это событие через addEventListener
*/

//Создание карточки

const cardsContainer = document.querySelector('.places');
const сardTemplate = document.querySelector('#places-template').content.querySelector('.places__item')

// открытие попапа с большой картинкой - выбор переменных

const popupZoom = document.querySelector('.popup_type_zoom');
const popupImageContainer = document.querySelector('.popup__image-container');
const popupOpenBigImage = popupImageContainer.querySelector('.popup-zoomm');
const popupCloseZoom = popupImageContainer.querySelector('.popup__close');
const popupImage = document.querySelector('.places__img');
const popupOpenZoom = popupImageContainer.querySelector('.popup__img-zoom');
const popupImageCapture = popupImageContainer.querySelector('.popup__capture-zoom');

// закончились переменные с большой картинкой
/*
const createCard = (card) => {
const сardNew = сardTemplate.cloneNode(true);
const сardTitle = сardNew.querySelector('.places__capture');
const cardImage = сardNew.querySelector('.places__img');
const cardDeleteButton = сardNew.querySelector('.places__delete-button');
const cardLikeButton = сardNew.querySelector('.places__like');

сardTitle.textContent = card.name;
cardImage.src = card.link;
 cardImage.alt = card.name;

  cardDeleteButton.addEventListener('click', handleDeleteButtonClick);
  cardLikeButton.addEventListener('click', handleLikeButtonClick);
  cardImage.addEventListener('click', handlepopupOpenBigImageClick);

  return сardNew;

};


const handleDeleteButtonClick = (e) => {
  e.target.closest('.places__item').remove()
} 
*/
/*стрелочная функция по мотивам вебинара Максима Чечелева */
/*
const handleLikeButtonClick = function (evt) {
  evt.target.classList.toggle('places__like_active')
}; 
*/
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

popupCloseZoom.addEventListener('click', function () {
  closePopup(popupZoom);
});
const templateSelector = '#places-template'  
const createCard = (data, templateSelector) => 
{ const card = new Card(data, templateSelector, handlepopupOpenBigImageClick) 
  return card.createCard() 
}


const renderCard = (card, templateSelector,) => 
{cardsContainer.prepend(createCard(card, templateSelector))
}

initialCards.forEach(card => { renderCard(card, templateSelector) })
