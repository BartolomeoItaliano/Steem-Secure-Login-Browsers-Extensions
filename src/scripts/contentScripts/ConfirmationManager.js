import {BackgroundRequest} from "./BackgroundRequest";
import {DomainGetter} from "../utils/DomainGetter";
import ext from "../utils/ext";
import {Utils} from "../utils/Utils";

/**
 * ConfirmationManager:
 * 1. Checks webpage given privileges
 * 2. Asks background script and than ConfirmationPopup if operation is permitted
 */
export class ConfirmationManager {

  constructor() {
  }

  /**
   * Allow without asking, if option checked. Ask anyway, if operation have stands on very high amount od Steems
   * @param params
   * @param callback
   */
  askForTransfer(params, callback) {
    this.getSettingsForDomain(function (settings) {
      let amount = parseFloat(params.amount.split(" ")[0]);
      let currency = params.amount.split(" ")[1];
      if(currency==="STEEM"){
        settings.alreadySendSBDAmount+=amount;
      }
      else if(currency==="SBD"){
        settings.alreadySendSBDAmount+=amount;
      }
      else{
        throw new Error("Currency type you chose does not exist choose STEEM or SBD");
      }

      if(settings.maxTransactionsSizeWithoutAllowance>settings.alreadySendSBDAmount
        || settings.maxTransactionsSizeWithoutAllowance>settings.alreadySendSteemAmount){
        settings.transfersPermanentlyAllowed = false;
        settings.alreadySendSBDAmount = 0;
        settings.alreadySendSteemAmount = 0;
      }


      if(!settings.transfersTemporaryAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.transfer", params, function (paramsFromPopup) {
          console.log(params, "Check the additional theft params!");
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(true);
      }
    }.bind(this));
  }

  askForPostOrComment(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.postCommentPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.comment", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(true);
      }
    }.bind(this));
  }

  askForDeletePostOrComment(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.deleteCommentPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.deleteComment", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(true);
      }
    }.bind(this));
  }

  askForVote(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.votePermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.vote", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(true);
      }
    }.bind(this));
  }

  askForSteemPowerDelegation(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.delegateSteemPowerPermanentlyAlowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.delegateSteemPower", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(true);
      }
    }.bind(this));
  }

  askForUnknowOperation(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.unknownOperationPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.unknownOperation", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(true);
      }
    }.bind(this));
  }

  /**
   * @private
   * @param callback {function(Settings)}
   */
  getSettingsForDomain(callback) {
    DomainGetter.getPageDomain(function (domainName) {
      let storageKey = domainName+ ConfirmationManager.OPTIONS_CONST;
      ext.storage.local.get(storageKey, function (settings) {
        if(!Utils.isObjectEmpty(settings)) {
          callback(settings[storageKey]);
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
  static updateSettingsForDomain(currentSettings, newSettings, callback) {
    for (let key in currentSettings) {
      if (currentSettings && currentSettings.hasOwnProperty(key) && newSettings && newSettings.hasOwnProperty(key)) {
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
 * @property transfersTemporaryAllowed {boolean}
 * @property postCommentPermanentlyAllowed {boolean}
 * @property votePermanentlyAllowed {boolean}
 * @property deleteCommentPermanentlyAllowed {boolean}
 * @property delegateSteemPowerPermanentlyAlowed {boolean}
 * @property maxTransactionsSizeWithoutAllowance {number}
 * @property alreadySendSteemAmount {number}
 * @property alreadySendSBDAmount {number}
 */

/**
 * @type {Settings}
 */
ConfirmationManager.DEFAULT_SETTINGS = {
  transfersTemporaryAllowed: false,
  postCommentPermanentlyAllowed: false,
  votePermanentlyAllowed: false,
  deleteCommentPermanentlyAllowed: false,
  delegateSteemPowerPermanentlyAlowed: false,
  unknownOperationPermanentlyAllowed: false,
  maxTransactionsSizeWithoutAllowance: 50,
  alreadySendSteemAmount: 0,
  alreadySendSBDAmount: 0
};


ConfirmationManager.OPTIONS_CONST = "_options";
