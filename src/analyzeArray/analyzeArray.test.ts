import { analyzeArray } from './analyzeArray'

describe('analyzeArray', () => {
  it('should return the correct values for a non-empty array', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = analyzeArray(arr)
    expect(result).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5
    })
  })

  it('should return 0 for all values when given an empty array', () => {
    const arr: number[] = []
    const result = analyzeArray(arr)
    expect(result).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0
    })
  })

  it('should handle negative numbers correctly', () => {
    const arr = [-5, -2, 0, 3, 7]
    const result = analyzeArray(arr)
    expect(result).toEqual({
      average: 0.6,
      min: -5,
      max: 7,
      length: 5
    })
  })

  it('should handle arrays with duplicate numbers correctly', () => {
    const arr = [2, 2, 2]
    const result = analyzeArray(arr)
    expect(result).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 3
    })
  })
})
