/**
 *
 */
export class ErrorHandler {
  /**
   * Constructor for the class ErrorHandler.
   */
  constructor () { }

  /**
   * Checks for type error.
   *
   * @param {number} dataToCheck - The data to check for error.
   * @throws {TypeError}
   */
  checkForTypeError (dataToCheck) {
    if (typeof dataToCheck !== 'number') {
      throw new TypeError(`ERROR: ${dataToCheck} is not of type number.`)
    }
  }

  /**
   * Checks if an array is empty.
   *
   * @param {Array} arr - The array to check.
   * @throws {Error}
   */
  checkIfEmptyError (arr) {
    if (!arr.length) {
      throw new Error('The array is empty.')
    }
  }
}
