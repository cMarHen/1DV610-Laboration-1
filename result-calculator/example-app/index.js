import { ResultCalculator } from '../ResultCalculator.js'

const FLOAT_NUMBERS = [21.242, 21.2311, 22.1635, 20.3246, 21.854, 21.634, 21.723]

try {
  const calculator = new ResultCalculator()

  calculator.setNumberToCollection(FLOAT_NUMBERS)

  console.log(calculator.getHighestNumber())
  console.log(calculator.getNormalDistribution())
} catch (error) {
  console.log(error.message)
}
