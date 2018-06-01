export class AuthenticationObserver {
  constructor() {
    this.loginSubsribers = [];
    this.logoutSubsribers = [];

    document.addEventListener("UserLoggedIn", function (data) {
      for(let i =0;i<this.loginSubsribers.length;i++){
        this.loginSubsribers[i](data.detail.login);
      }
    }.bind(this));
    document.addEventListener("UserLoggedOut", function (data) {
      for(let i =0;i<this.logoutSubsribers.length;i++){
        this.logoutSubsribers[i]();
      }
    }.bind(this));
  }

  subscribeOnLogin(callback) {
    this.checkIfIsFunction(callback);
    this.loginSubsribers.push(callback);
  }

  unSubscribeOnLogin(callback) {
    this.checkIfIsFunction(callback);
    for(let i =0;i<this.loginSubsribers.length;i++){
      this.loginSubsribers.splice(i,1);
    }
  }

  subscribeOnLogout(callback) {
    this.checkIfIsFunction(callback);    this.logoutSubsribers.push(callback);
  }

  unSubscribeOnLogout(callback) {
    this.checkIfIsFunction(callback);
    for(let i =0;i<this.logoutSubsribers.length;i++){
      this.logoutSubsribers.splice(i,1);
    }
  }

  /**
   * @private
   * @param arg
   * @returns {boolean}
   */
  checkIfIsFunction(arg) {
    if(!(arg && {}.toString.call(arg) === '[object Function]')){
      throw new Error("Subscriber is not function type!");
    }
  }
}
