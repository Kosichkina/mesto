import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor (popupSelector, handleFormSubmit) {
    super({popupSelector});
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
  };

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {}; //пустой объект
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    }); //добавили в пустой объект данные
    return this._formValues;
  };
  

  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
     // this.close();
    });
    super.setEventListeners();
  };

  close() {
    this._popupForm.reset();
    super.close();
  };
}