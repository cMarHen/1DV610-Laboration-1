import { ResultCalculator } from '../result-calculator/ResultCalculator.js';
import { App } from './src/App.js';
import { ReadLine } from './src/ReadLine.js';

const NUMBERS = [42, 21, 534, 23, 32, 11, 21]
const FLOAT_NUMBERS = [42.242, 21.2311, 534.1635, 23.3246, 32.854, 11.634, 21.723]

const calc = new ResultCalculator()
// const readline = new ReadLine()

try {

  new App()

/*   while (true) {
    const userInput = await readline.questionUser('What do you want to do?')

    console.log(userInput)

    readline.closeReadLine()
  }

// Add Integers to collection
NUMBERS.map((number) => calc.setNumberToCollection(number))
console.log('All numbers in the collection: ')
console.log(calc.getAllNumbers())

console.log('The highest number in collection:')
console.log(calc.getHighestNumber())

console.log('The lowest number in collection:')
console.log(calc.getLowestNumber())

// Delete numbers from collection
calc.emptyNumberCollection()

console.log('Should be empty: ')
console.log(calc.getAllNumbers()) */

} catch (error) {
  console.log(error.message)
}
