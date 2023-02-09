
// Добавление валидации

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  errorClass: 'popup__input-error_visible', //нет класса в htm, есть в css
};

enableValidation(validationConfig)


/*const enableValidation = (config) => {
  const forms =[...document.querySelectorAll(config.formselector)]
}
*/
function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  }
  else {
    showInputError(formElement, inputElement, config);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);

}

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
    e.submitter.disabled = true; 
    e.submitter.classList.add(config.inactiveButtonClass); 

  } 
  else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;

  }
}


function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector)

  toggleButtonState(inputList, buttonElement, config)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })

  })

}

function enableValidation({ formSelector, ...restConfig }) {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig)
  })
}

/*
 не вызывать toggleButtonState вне обработчика события input, а завести в validate.js
  две функции, disableSubmitButton и enableSubmitButton, которые вызываются в toggleButtonState.
   Но также можно вызвать disableSubmitButton при открытии попапа добавления новой карточки 
   и тем самым заблокировать кнопку при пустых первоначальных полях. 
   Эта функция disableSubmitButton принимает два параметра - элемент кнопки и конфиг 
   с классами, из которого надо взять класс отвечающий за дизейбленное состояние кнопки
    и добавить этот класс кнопке.
    */