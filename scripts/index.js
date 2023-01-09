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
const buttonCloseList = document.querySelectorAll('.popup__close'); 
  

//открытие попапа добавления картинки - выбор переменных
const popupNewPlaceElement = document.querySelector('.popup_type_new-place');
const buttonOpenPopupAdd= document.querySelector('.profile__add-button');
const popupInputNewPlace = popupNewPlaceElement.querySelector('.popup__input_type_place');
const popupInputLinkPlace = popupNewPlaceElement.querySelector('.popup__input_type_link');
const buttonClosePopupAdd = popupNewPlaceElement.querySelector('.popup__close');
const popupSubmitAddButton = popupNewPlaceElement.querySelector('.popup__button');
const popupFormAdd = popupNewPlaceElement.querySelector('.popup__form-new-place');

// открытие и закрытие попапа - ФУНКЦИЯ универсальная

//закрытие попапа  ESC

const closePopupEsc = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  };
}

//закрытие попапа OVERLAY

function closePopupOverlay(event){
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
  // переписала функцию закрытия по комментрарию ревьюера- получилась единая функция и слушатель для попапов

  buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    popup.addEventListener('mousedown', closePopupOverlay);
    btn.addEventListener('click', () => closePopup(popup)); 
  }) 

  
  
  //Открытие и закрытие добавления карточки
  buttonOpenPopupAdd.addEventListener('click', function() {
   // disableSubmithButton(popupNewPlaceElement, 'popup__button_invalid');
    openPopup(popupNewPlaceElement);
    
    popupFormAdd.reset() 
    
    
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
  


    


   /*
  function disableButton (evt){
      evt.submitter.disabled = true;
      evt.submitter.classList.add('popup__button_invalid');
    }
      disableButton(evt, popupNewPlaceElement);
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

const createCard = (card) => {
    const сard = сardTemplate.cloneNode(true);
    const сardTitle = сard.querySelector('.places__capture');
    const cardImage = сard.querySelector('.places__img');
    const cardDeleteButton = сard.querySelector('.places__delete-button');
    const cardLikeButton = сard.querySelector('.places__like');

    сardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;

    cardDeleteButton.addEventListener('click', handleDeleteButtonClick);
    cardLikeButton.addEventListener('click', handleLikeButtonClick);
    cardImage.addEventListener('click', handlepopupOpenBigImageClick);
    // cardImage.addEventListener('click', () => handlepopupOpenBigImageClick(card)); не поняла, как сделать и зачем, в вебинаре так, вроде показывали, как я сделала
    

    return сard;

};
const handleDeleteButtonClick = (e) => {
    e.target.closest('.places__item').remove()
}
/*стрелочная функция по мотивам вебинара Максима Чечелева */

const handleLikeButtonClick = function (evt) {
    evt.target.classList.toggle('places__like_active')
};
/*в toggle (переключатель классов) перередается класс, пишется без точки*/

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


  