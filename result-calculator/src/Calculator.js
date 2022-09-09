// A class specific for calculations.

/**
 *
 */
export class Calculator {
  /**
   * Calculate highest number in an array.
   *
   * @param {number[]} arr - Array of number.
   * @returns {number} - The highest number.
   */
  calculateHighestNumber (arr) {
    let highestNumber = arr[0]

    for (const number of arr) {
      if (number > highestNumber) {
        highestNumber = number
      }
    }

    return highestNumber
  }

  /**
   * Calculate lowest number in an array.
   *
   * @param {number[]} arr - Array of number.
   * @returns {number} - The lowest number.
   */
  calculateLowestNumber (arr) {
    let lowestNumber = arr[0]

    for (const number of arr) {
      if (number < lowestNumber) {
        lowestNumber = number
      }
    }

    return lowestNumber
  }
}
