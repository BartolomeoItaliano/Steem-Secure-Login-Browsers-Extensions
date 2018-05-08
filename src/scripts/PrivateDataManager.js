import {DomainGetter} from "./DomainGetter";
import ext from "./utils/ext";

/**
 * Webpages doesn't have access to data stored with this manager
 */
export class PrivateDataManager {

  /**
   * Sets credentials for currently open domain property
   * @param privateDataModel
   * @param callback
   */
  static setPrivateDataForDomain(privateDataModel, callback) {
    let domainName;
    PrivateDataManager.getPageUrl(function (url) {
      domainName = DomainGetter.getDomainFromUrl(url);
      ext.storage.local.set({[domainName]: privateDataModel});
      callback();
    });
  }

  /**
   * @param {function(PrivateDataModel)} callback
   * @returns {void}
   */
  static getPrivateDataForDomain(callback) {
    let domainName;
    PrivateDataManager.getPageUrl(function (url) {
      domainName = DomainGetter.getDomainFromUrl(url);
      ext.storage.local.get(domainName, function (privateDataModel) {
        if(privateDataModel[domainName]) {
          callback(privateDataModel[domainName]);
        }
        else{
          callback(null);
        }
      });
    });
  }

  /**
   * @callback privateDataManagerCallback
   * @param {string} steemAccountName
   * @param {string} correspondingWif
   */

  /**
   * @param {privateDataManagerCallback} callback - function
   * @returns {void}
   */
  static getActiveCredentials(callback) {
    let domainName;
    PrivateDataManager.getPageUrl(function (url) {
      domainName = DomainGetter.getDomainFromUrl(url);
      ext.storage.local.get(domainName, function (privateDataModel) {
        if (PrivateDataManager.checkIfIsStored(privateDataModel[domainName].activeKey)) {
          callback(privateDataModel[domainName].steemAccountName, privateDataModel[domainName].activeKey);
        }
      });
    });
  }

  /**
   * @param {privateDataManagerCallback} callback - function
   * @returns {void}
   */
  static getPostingCredentials(callback) {
    let domainName;
    PrivateDataManager.getPageUrl(function (url) {
      domainName = DomainGetter.getDomainFromUrl(url);
      ext.storage.local.get(domainName, function (privateDataModel) {
        if (PrivateDataManager.checkIfIsStored(privateDataModel[domainName].postingKey)) {
          callback(privateDataModel[domainName].steemAccountName, privateDataModel[domainName].postingKey);
        }
      });
    });
  }

  /**
   * @param {privateDataManagerCallback} callback - function
   * @returns {void}
   */
  static getMemoCredentials(callback) {
    let domainName;
    PrivateDataManager.getPageUrl(function (url) {
      domainName = DomainGetter.getDomainFromUrl(url);
      ext.storage.local.get(domainName, function (privateDataModel) {
        if (PrivateDataManager.checkIfIsStored(privateDataModel[domainName])) {
          callback(privateDataModel[domainName].steemAccountName, privateDataModel[domainName].memoKey);
        }
      });
    });
  }

  /**
   * Removes private data for currently open domain
   * @param callback
   * @returns {void}
   */
  static removePrivateDataForDomain(callback) {
    let domainName;
    PrivateDataManager.getPageUrl(function (url) {
      domainName = DomainGetter.getDomainFromUrl(url);
      ext.storage.local.remove([domainName]);
      callback();
    });
  }

  /**
   * Removes all stored in storage private data
   * @returns {void}
   */
  static clearAllPrivateData() {
    ext.storage.local.clear(function () {
      let error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
    });
  }

  /**
   * @private
   * @param privateKey
   * @returns {boolean}
   */
  static checkIfIsStored(privateKey) {
    if (privateKey !== "" && privateKey) {
      return true;
    }
    console.error("You didn't gave permission for this kind of operation during login process");
    return false;
  }

  /**
   * @private
   * @param {function({string})} callback - get back url
   * @returns {void}
   */
  static getPageUrl(callback) {
    /**
     * Script is loaded to popup and content script due to their different privalages this 'if statement' is neccessarily
     */
    if (ext.tabs && ext.tabs.getSelected) {
      ext.tabs.getSelected(null, function (tab) {
        callback(tab.url)
      });
    }
    else
      callback(location.href);
  }
}
