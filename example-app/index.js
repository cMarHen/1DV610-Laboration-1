import { ResultCalculator } from '../result-calculator/src/ResultCalculator.js';

const NUMBERS = [42, 21, 534, 23, 32, 11, 21]
const FLOAT_NUMBERS = [42.242, 21.2311, 534.1635, 23.3246, 32.854, 11.634, 21.723]

const calc = new ResultCalculator()

// Add Integers to collection
NUMBERS.map((number) => calc.setNumberToCollection(number))
// Print all integers
console.log(calc.getAllNumbers())
console.log(calc.getHighestNumber())
console.log(calc.getLowestNumber())

// Delete numbers from collection
calc.emptyNumberCollection()

console.log(calc.getAllNumbers())
