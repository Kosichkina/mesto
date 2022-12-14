
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



//Создание карточки
const cardsContainer = document.querySelector('cards');
const CardTemplate = document.querySelector('#places-template').content.querySelector('.places__item');


const createCard  = (card) => { 
    const newCard = CardTemplate.cloneNode(true);   
    const сardTitle = newCard.querySelector('.places__name-like');
    const cardImage = newCard.querySelector('.places__img');
    const cardLikeButton = newCard.querySelector('.places__like');
    const cardDeleteButton = newCard.querySelector('.places__delete-button');
    
    сardTitle.textContent = card.name;
    cardImage.src =  card.link;
    cardImage.alt = card.name;

    cardLikeButton.addEventListener('click', handleLikeCard);
    cardDeleteButton.addEventListener('click', handleDeleteCard);
    cardImage.addEventListener('click', handleImagePopup);
    

   
    return newCard;

};


const renderCard = (card) => {
    cardsContainer.prepend(card);

  };
  
  initialCards.forEach((card) => {
    renderCard(card);
    
 
  });
  
  