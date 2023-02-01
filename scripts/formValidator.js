
export class FormValidator {
    constructor(config, form) {
        this._form = form
        this._config = config
        this._inputList = 
        Array.from(this._formElement.querySelectorAll(config.inputSelector)); // или form.querySelectorAll
        this._buttonElement = 
        this._formElement.querySelector(config.submitButtonSelector); // или form.querySelectorAll         
    }
    

_showInputError(form, config, inputList) { 
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }
  
 _hideInputError(formElement, inputElement, config) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }
  
  _checkInputValidity(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
        this._hideInputError(formElement, inputElement, config);
    }
    else {
        this._showInputError(formElement, inputElement, config);
    }
  }
  
  _hasInvalidInput(inputList) {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  
  }
  
  _toggleButtonState(inputList, buttonElement, config) {
    if (this._hasInvalidInput(inputList)) {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
  
  
    } else {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
  
    }
  }
  
  _setEventListeners(formElement, config) {
    //const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    //const buttonElement = formElement.querySelector(config.submitButtonSelector)
  
    _toggleButtonState(inputList, buttonElement, config)
  
    this._inputList.forEach((inputElement) => {
        this._inputElement.addEventListener('input', () => {
        _checkInputValidity(formElement, inputElement, config);
        _toggleButtonState(inputList, buttonElement, config);
      })
  
    })
  
  }
  
  _enableValidation({ formSelector, ...restConfig }) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, restConfig)
    })
  }
}