/**
 * Module for type Sorter.
 *
 * @author Martin Henriksson
 * @class Sorter
 */
export class Sorter {
  /**
   * Sort an array.
   *
   * @param {number[]} arr - The array to sort.
   * @param {number} sortType - Choice of sorting.
   * @returns {number[]} - The sorted array.
   */
  sortArray (arr, sortType) {
    let copy = [...arr]

    switch (sortType) {
      case 1:
        copy = this.#sortAscending(copy)
        break

      case 2:
        copy = this.#sortDescending(copy)
        break

      default:
        // Do nothing with copy.
        break
    }

    return copy
  }

  /**
   * Sort array in a ascending order.
   *
   * @returns {number[]} - Array sorted in ascending order.
   */
  #sortAscending () {
    return []
  }

  /**
   * Sort array in a descending order.
   *
   * @returns {number[]} - Array sorted in descending order.
   */
  #sortDescending () {
    return []
  }
}
