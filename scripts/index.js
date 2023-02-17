import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js'

//кнопки, выбор переменных
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCloseButtonProfileElement = popupEditProfile.querySelector('.popup__close');
const popupOpenButtonProfileElement = document.querySelector('.profile__edit-button');
const popupNewPlaceElement = document.querySelector('.popup_type_new-place');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupSubmitAddButton = popupNewPlaceElement.querySelector('.popup__button');

const handleSubmitProfile = (values) => {      
  UserInfo.setUserInfo({
    name: values.name,
    description: values.description
  });
  popupEditProfile.close();
};


const handleSubmitAddCard = (values) => {       
  const newCard = {
      name: values.name,                    
      link: values.link                      
  };
  renderCard(newCard);  
  popupNewPlaceElement.close();              
};


// ПР 8
const popupWithImage = new PopupWithImage('.popup_type_zoom')   
popupWithImage.setEventListeners();
// для каждого попапа свой экземпляр PopupWithForm:

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitProfile)  
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_new-place', handleSubmitAddCard)    
addCardPopup.setEventListeners();

const cardSection = new Section({items: initialCards, renderer: renderCard}, '.cards')
cardSection.renderCards();                 

const infoObject = UserInfo.getUserInfo();
nameInput.value = infoObject.name;
description.value = infoObject.descripton;


// Добавление валидации

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  errorClass: 'popup__input-error_visible', //нет класса в htm, есть в css
};

const addCardFormValidator = new FormValidator(validationConfig, popupFormAdd)
const editProfileFormValidator = new FormValidator(validationConfig, popupformEditProfile)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()
 
