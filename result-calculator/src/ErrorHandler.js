/**
 *
 */
export class ErrorHandler {
  /**
   * Controlls if a data is of type number.
   *
   * @param {number} dataToCheck - The data to check for error.
   * @throws {TypeError}
   */
  errCheckForTypeNumber (dataToCheck) {
    if (typeof dataToCheck !== 'number' || isNaN(dataToCheck)) {
      throw new TypeError(`ERROR: ${dataToCheck} is not of type number.`)
    }
  }

  /**
   * Checks if an array is empty.
   *
   * @param {Array} arr - The array to check.
   * @throws {Error}
   */
  errCheckIfArrayIsEmpty (arr) {
    if (!arr.length) {
      throw new Error('The array is empty.')
    }
  }
}
