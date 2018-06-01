export class Utils{
  static isObjectEmpty(obj){
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
}