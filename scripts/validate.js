
// Добавление валидации
  
const  validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    activeButtonClass: '.popup__button_valid', 
    inactiveButtonClass: '.popup__button_invalid', //может, если это добавить, то заработает
    inactiveButtonClass: '.popup__button_invalid', //нет класса в htm, есть в css
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_visible', //нет класса в htm, есть в css
  };

  //Общие переменные для обоих попапов
  const form = document.querySelector('.popup__form');
  const input = document.querySelector('.popup__input');
  const forms = [...document.querySelectorAll('.popup__form')];
  const inputs = [...document.querySelectorAll('.popup__input')];

  // переменные для попапа профиля
  const userNameInput = document.querySelector('.popup__input_type_name');
  const descriptionInput = document.querySelector('.popup__input_type_description')
  

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({
    name: userNameInput.value,
    descriptipon: descriptionInput.value,
  
  });
}

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

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

function hideInputError (formElement, inputElement, config) {
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

function hasInvalidImput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, buttonElement, config) {
if (hasInvalidImput(inputList)) {
  buttonElement.classList.add(config.inactiveButtonClass);  
  buttonElement.classList.remove(config.activeButtonClass);
    
    buttonElement.disable  = true;
} else {
    buttonElement.classList.add(config.activeButtonClass);
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false; 
}
}

function setEventListeners(formElement, config) {
const inputList = Array.from(formElement.querySelectorAll(config.inputSelector)); 
const buttonElement = formElement.querySelector(config.submitButtonSelector)

toggleButtonState(inputList, config, buttonElement)

inputList.forEach((inputElement) => {
    inputElement.addEventListener('input',() => {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      })

    })
    
}

function enableValidation({ formSelector, ...restConfig }){
const formList = Array.from(document.querySelectorAll(formSelector));

formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig)
})
 }

