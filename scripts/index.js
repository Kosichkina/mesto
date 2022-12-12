
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
const cardsContainer = document.querySelector('.places__item');
const Template = document.querySelector('.places-template').content.querySelector('.places__item');

const generateCard = (card) => { 
    const Card = Template.cloneNode(true);   
    const CardTitle = Card.querySelector('.places__name-like');
    const cardImage = Card.querySelector('.places__img');
    const cardLikeButton = Card.querySelector('.places__like');
    const cardDeleteButton = Card.querySelector('.places__delete-button');
   


    CardTitle.textContent = places.name;
    cardImage.src = places.link;
    cardImage.alt = card.name;
  
    cardLikeButton.addEventListener('click', handleLikeCard);
    cardDeleteButton.addEventListener('click', handleDeleteCard);
    cardImage.addEventListener('click', handleImagePopup);
    return newCard;
  };
  
  const renderCard = (card) => {
    Template.prepend(generateCard(card));
  };
  
  initialCards.forEach((card) => {
    renderCard(card);
  });
  
  
  
 