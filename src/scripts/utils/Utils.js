export class Utils{
  static isObjectEmpty(obj){
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}