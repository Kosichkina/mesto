
export class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._config = config;
        this._inputSelector = config.inputSelector;
        //массив всех инпутов:
        this._inputList = 
        Array.from(this._form.querySelectorAll(config.inputSelector)); 
        //кнопка 
        this._buttonElement = 
        this._form.querySelector(config.submitButtonSelector); 
        this._formSelector = config.formSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._errorClass = config.errorClass;
    }
    

_showInputError(inputElement) { 
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }
 
  
 _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }
  
  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
        this._hideInputError(inputElement);
    }
    else {
        this._showInputError(inputElement);
    }
  }
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  
  }
  
  _toggleButtonState(inputList) {
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

  enableValidation () {
    this._toggleButtonState();
    this._inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
        this._checkInputValidity()
        this._toggleButtonState();
        });
    });
}; 
  /*
  enableValidation({formSelector, ...restConfig }) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement, restConfig)
    })
  }
  */
}