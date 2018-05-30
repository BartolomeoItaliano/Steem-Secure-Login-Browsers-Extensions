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
      if(!settings.transfersPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.transfer", params, function (paramsFromPopup) {
          console.log(params, "Check the additional theft params!");
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  askForComment(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.postCommentPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.comment", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  askForPost(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.postCommentPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.post", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  askForDeleteComment(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.deleteCommentPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.deleteComment", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  askForVote(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.votePermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.vote", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  askForSteemPowerDelegation(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.delegateSteemPowerPermanentlyAlowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.delegateSteemPower", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
          return true;
        }.bind(this));
      }
      else{
        callback(bRparams.allowed);
      }
    }.bind(this));
  }

  askForUnknowOperation(params, callback) {
    this.getSettingsForDomain(function (settings) {
      if(!settings.unknownOperationPermanentlyAllowed) {
        BackgroundRequest.send("ConfirmPopup.broadcast.unknownOperation", params, function (paramsFromPopup) {
          ConfirmationManager.updateSettingsForDomain(settings, paramsFromPopup.settings);
          //Check if User Allowed future automatic confirmations, if yes changed params in storage
          callback(paramsFromPopup.allowed);
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
        if(!Utils.isObjectEmpty(settings)) {
          callback(settings);
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
 * @property transfersPermanentlyAllowed {boolean}
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
  transfersPermanentlyAllowed: false,
  postCommentPermanentlyAllowed: false,
  votePermanentlyAllowed: false,
  deleteCommentPermanentlyAllowed: false,
  delegateSteemPowerPermanentlyAlowed: false,
  unknownOperationPermanentlyAllowed: false,
  maxTransactionsSizeWithoutAllowance: 100,
  alreadySendSteemAmount: 0,
  alreadySendSBDAmount: 0
};


ConfirmationManager.OPTIONS_CONST = "_options";
