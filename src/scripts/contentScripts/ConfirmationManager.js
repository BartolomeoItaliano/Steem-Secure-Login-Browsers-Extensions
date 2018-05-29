import {BackgroundRequest} from "./BackgroundRequest";
import {DomainGetter} from "../utils/DomainGetter";
import ext from "../utils/ext";

/**
 * ConfirmationManager checks webpage given privileges
 */
export class ConfirmationManager {

  constructor() {
    this.backgroundRequest = new BackgroundRequest();
  }

  /**
   * Allow without asking if option checked, ask anyway if operation have tis on very high amount
   * @param params
   * @param callback
   */
  askForTransfer(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(settings.permanentlyAllowed) {
        this.backgroundRequest.send("ConfirmPopup.broadcast.transfer", params, function (bRparams) {
          this.updateSettingsForDomain(settings, bRparams.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(bRparams.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  /**
   * @private
   * @param callback {function(Settings)}
   */
  getSettingsForDomain(callback) {
    DomainGetter.getPageDomain(function (domainName) {
      ext.storage.local.get(domainName+ ConfirmationManager.OPTIONS_CONST, function (settings) {
        if(settings[domainName]) {
          callback(settings[domainName]);
        }
        else{
          callback(ConfirmationManager.DEFAULT_SETTINGS);
        }
      });
    });
  }

  /**
   * @private
   * @param currentSettings {Settings}
   * @param newSettings {Settings}
   * @param callback
   */
  updateSettingsForDomain(currentSettings, newSettings, callback) {
    for (let key in currentSettings) {
      if (currentSettings.hasOwnProperty(key) && newSettings.hasOwnProperty(key)) {
        currentSettings[key] = newSettings[key];
      }
    }
    DomainGetter.getPageDomain(function (domainName) {
      ext.storage.local.set({[domainName + ConfirmationManager.OPTIONS_CONST]: currentSettings});
      if(callback) {
        callback();
      }
    });
  }
}

/**
 * @typedef {Object} Settings
 * @property permanentlyAllowed {boolean}
 * @property maxTransactionsSizeWithoutAllowance {number}
 * @property alreadySendSteemAmount {number}
 * @property alreadySendSBDAmount {number}
 */

/**
 * @type {Settings}
 */
ConfirmationManager.DEFAULT_SETTINGS = {
  permanentlyAllowed: false,
  maxTransactionsSizeWithoutAllowance: 100,
  alreadySendSteemAmount: 0,
  alreadySendSBDAmount: 0
};


ConfirmationManager.OPTIONS_CONST = "_options";
