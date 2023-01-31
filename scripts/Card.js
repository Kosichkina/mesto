export class Card {
  //принимает в конструктор данные карточки и селектор её template-элемента;
constructor (data, cardTemplate) {
this._name = data.name;
this._link = data.link;
this._templateSelector = cardTemplate;

}
_getTemplate() {
const сardNew = document.querySelector(this._templateSelector).content.querySelector('.places__item').cloneNode(true);
    return сardNew; //cardElement
}

createCard() {
    
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.places__img');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.places__capture').textContent = this._name;
    this._cardDeleteButton = this._card.querySelector('.places__delete-button');
    this._cardLikeButton = this._card.querySelector('.places__like');
    this._setEventListeners();
    
    return this._card;

}


_handleDeleteButtonClick = (e) => {
    e.target.closest('.places__item').remove()
  }
  _handleLikeButtonClick = function (evt) {
    evt.target.classList.toggle('places__like_active');
}
_setEventListeners() {
    this._cardImage.addEventListener('click', () => {
        this._handlepopupOpenBigImageClick(this._link, this._name)
    });

    this._cardDeleteButton.addEventListener('click', () => {
        this._handleDeleteButtonClick()
    });

    this._cardLikeButton.addEventListener('click', () => {
        this._handleLikeButtonClick ()
    });
}


}
// this._cardsContainer = document.querySelector('.places');
//нужно создать экземпляр класса Card и у него вызывать метод createCard const card = new Card(data, templateSelector) wrap.prepend(card.createCard())

