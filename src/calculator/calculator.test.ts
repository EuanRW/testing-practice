import { calculator } from './calculator'

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5)
      expect(calculator.add(-2, 3)).toBe(1)
    })
  })

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2)
      expect(calculator.subtract(2, 5)).toBe(-3)
    })
  })

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2)
      expect(calculator.divide(10, 2)).toBe(5)
    })

    it('should return Infinity when dividing by zero', () => {
      expect(calculator.divide(5, 0)).toBe(Infinity)
    })
  })

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6)
      expect(calculator.multiply(-2, 3)).toBe(-6)
    })
  })
})
