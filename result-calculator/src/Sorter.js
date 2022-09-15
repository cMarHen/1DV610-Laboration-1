/**
 * Module for type Sorter.
 *
 * @author Martin Henriksson
 * @class Sorter
 */
export class Sorter {
  /**
   * Sort an object by value.
   *
   * @param {object} obj - The object to sort.
   * @returns {object} - Object sorted by value.
   */
  sortObject (obj) {
    return Object.values(obj).sort((a, b) => a - b)
  }

  /**
   * Sort array in a ascending order.
   *
   * @param {number[]} arr - The array to sort.
   * @returns {number[]} - Array sorted in ascending order.
   */
  sortArrayAscending (arr) {
    return arr.sort((a, b) => a - b)
  }

  /**
   * Sort array in a descending order.
   *
   * @param {number[]} arr - The array to sort.
   * @returns {number[]} - Array sorted in descending order.
   */
  sortArrayDescending (arr) {
    return arr.sort((a, b) => a - b).reverse()
  }
}
