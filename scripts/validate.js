
// Добавление валидации
  
const  validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    activeButtonClass: '.popup__button_valid', 
    inactiveButtonClass: '.popup__button_invalid', //нет в вебинаре, видимо, лишнее, от безысходности добавила
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
  
   // переменные для попапа с добавлением картинки
   const placeInput = document.querySelector('.popup__input_type_place');
   const linkInput = document.querySelector('.popup__input_type_link')
   

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({
    name: userNameInput.value,
    descriptipon: descriptionInput.value,
    place: placeInput.value,
    link: linkInput.value,
  
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
  /* функции для скрытия кнопки  */
  function disableSubmithButton(buttonElement, config) {
    buttonElement.classList.add('popup__button_invalid');
    buttonElement.disabled = 'disabled';
  }

  function enableSubmithButton(buttonElement, config) {
    buttonElement.classList.remove('popup__button_invalid');
    buttonElement.disabled = '';
  }


  function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.remove(config.activeButtonClass);
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
      disableSubmithButton(buttonElement, config);
     
      
    } else {
      buttonElement.classList.add(config.activeButtonClass);
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
      enableSubmithButton(buttonElement, config)
   
    }
  }

function setEventListeners(formElement, config) {
const inputList = Array.from(formElement.querySelectorAll(config.inputSelector)); 
const buttonElement = formElement.querySelector(config.submitButtonSelector)

toggleButtonState(inputList, buttonElement, config)

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

/*
 не вызывать toggleButtonState вне обработчика события input, а завести в validate.js
  две функции, disableSubmitButton и enableSubmitButton, которые вызываются в toggleButtonState.
   Но также можно вызвать disableSubmitButton при открытии попапа добавления новой карточки 
   и тем самым заблокировать кнопку при пустых первоначальных полях. 
   Эта функция disableSubmitButton принимает два параметра - элемент кнопки и конфиг 
   с классами, из которого надо взять класс отвечающий за дизейбленное состояние кнопки
    и добавить этот класс кнопке.
 */