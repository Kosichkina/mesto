import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    open(name, link) {
        
        const popupOpenZoom = this._popup.querySelector('.popup__img-zoom')
        const popupImageCapture = this._popup.querySelector('.popup__capture-zoom')

        popupOpenZoom.src =  link;                           
        popupOpenZoom.alt =  name;                          
        popupImageCapture.textContent = name;

        super.open()
    }
}