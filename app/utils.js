export default class Utils {
  /**
   * [getFormData description]
   * @param  {[type]} formElements [description]
   * @return {[type]}              [description]
   */
  static getFormData(formElements) {
    let datas = {};
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].type != 'submit') {
        datas[formElements[i].name] = formElements[i].value;
      }
    }
    return datas
  }
}