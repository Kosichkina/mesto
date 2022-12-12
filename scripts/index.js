
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
const generateCard = (card) => { 
    const Card = Template.cloneNode(true);   
    const CardTitle = Card.querySelector('.card__title');
    const cardImage = Card.querySelector('.card__image');
    const cardLikeButton = Card.querySelector('.card__like-button');
    const cardDeleteButton = Card.querySelector('.card__delete-button');
    
  
    CardTitle.textContent = card.name;
    cardImage.src = card.link;
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
  
  
  
 