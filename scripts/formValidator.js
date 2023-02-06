
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
    

_showInputError(input) { 
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  }
 
  
 _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  }
  
  _checkInputValidity(input) {
    if (input.validity.valid) {
        this._hideInputError(input);
    }
    else {
        this._showInputError(input);
    }
  }
  
  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  
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
  
  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState(this._button, this._inputs);
      });
    });

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._isValid(this._form);
        this._toggleButtonState(this._button, this._inputs);
    }, 0)
    });

    this._toggleButtonState(this._button, this._inputs);
  };

  enableValidation() {
    _handleSubmit = (event) => {
      event.preventDefault();
    this._setEventListeners();

}
}
}
