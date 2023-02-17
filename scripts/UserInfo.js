export class UserInfo {
    constructor({ profileNameSelector, profileDescriptionSelector }) {
      this._name = document.querySelector(profileNameSelector);
      this._description = document.querySelector(profileDescriptionSelector);
    };
  
    getUserInfo() {
      const userData = {
        name: this._name.textContent,
        description: this._description.textContent
      }
      return userData;
    };
  
  
    setUserInfo(userData) {
      this._name.textContent = userData.name;
      this._description.textContent = userData.description;
    };
  };