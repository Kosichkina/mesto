export class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
   this._handleEscClose = this._handleEscClose.bind(this); //подсмотрела у коллег

    };
  
    _handleEscClose = (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    };
    
    open() {
      this._popup.classList.add('popup_active');
      document.addEventListener('keydown', this._handleEscClose);
     this._popup.addEventListener("click", closePopupOverlay)
    };
  
    openPopup = function (popup) {
      popup.classList.add('popup_active');
      document.addEventListener('keydown', closePopupEsc);
      popup.addEventListener("click", closePopupOverlay)
    }
            close() {
         this._popup.classList.remove('popup_active');
         document.removeEventListener('keydown', this._handleEscClose);
         this._popup.removeEventListener("click", closePopupOverlay)
    };
  
    setEventListeners() {
      const popupCloseButton = this._popup.querySelector('.popup__close');
      popupCloseButton.addEventListener('click', () => {this.close()});
  
      this._popup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
          this.close();
        };
      });
    };
  }