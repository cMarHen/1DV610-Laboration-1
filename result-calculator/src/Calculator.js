// A class specific for calculations.

import { Sorter } from './Sorter.js'

/**
 *
 */
export class Calculator {
  #sorter

  /**
   * Constructor for Calculator.
   */
  constructor () {
    this.#sorter = new Sorter()
  }

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

  /**
   * Calculate the mean value of an array.
   *
   * @param {number[]} arr - Array of number(s)
   * @returns {number} - The mean value.
   */
  calculateMeanValue (arr) {
    let totalValue = 0
    for (const number of arr) {
      totalValue += number
    }

    return (totalValue / arr.length)
  }

  /**
   * Calculate the median value of an array.
   *
   * @param {number[]} arr - Array of numbers.
   * @returns {number} - The median value.
   */
  calculateMedianValue (arr) {
    const sortedArray = this.#sorter.sortArray([...arr], 1)

    let median = 0
    if (sortedArray.length % 2 === 0) {
      median = (sortedArray[(sortedArray.length) / 2 - 1] + sortedArray[(sortedArray.length) / 2]) / 2
    } else {
      median = sortedArray[(sortedArray.length - 1) / 2]
    }

    return median
  }

  calculateModeValue() {

  }

  /**
   * Calculate frequency of an array of numbers.
   *
   * @param {number[]} arr - The array to calculate.
   * @returns {object} - The frequency with the numbers as property and frequency as value.
   */
  calculateFrequency (arr) {
    const frequency = {}

    for (const number of arr) {
      if (frequency[number]) {
        frequency[number]++
      } else {
        frequency[number] = 1
      }
    }

    return frequency
  }
}
