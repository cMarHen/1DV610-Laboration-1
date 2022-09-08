export class ResultCalculator {
  #listOfNumbers = []
  constructor () {
  }

  setNumberToCollection(number) {
    if (typeof number === 'number') {
      this.#listOfNumbers.push(number)
    } else {
      throw new RangeError('The list should only contain numbers.')
    }
  }

  getAllNumbers() {
    const copy = []
    this.#listOfNumbers.map((number) => copy.push(number))

    return copy
  }

  getHighestNumber() {

  }

  getLowestNumber() {

  }

  getMeanValue() {

  }

  getMedianValue() {

  }

  emptyNumberCollection() {
    this.#listOfNumbers = []
  }

  #getSortedNumbers() {

  }

  #iterator() {}

  #errorHandler() {}
}