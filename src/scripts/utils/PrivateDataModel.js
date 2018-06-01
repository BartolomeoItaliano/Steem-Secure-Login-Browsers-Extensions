export class PrivateDataModel{

  /**
   * @param {string} steemAccountName
   * @param {string} [activeKey=]
   * @param {string} [postingKey=]
   * @param {string} [memoKey=]
   */
  constructor(steemAccountName, activeKey="", postingKey="",memoKey=""){
    this.steemAccountName = steemAccountName;
    this.activeKey = activeKey;
    this.postingKey = postingKey;
    this.memoKey = memoKey;
  }
}