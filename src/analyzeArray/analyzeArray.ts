export function analyzeArray (arr: number[]): object {
  return {
    average: (arr.length === 0) ? 0 : arr.reduce((p, c) => p + c, 0) / (arr.length),
    min: (arr.length === 0) ? 0 : Math.min(...arr),
    max: (arr.length === 0) ? 0 : Math.max(...arr),
    length: arr.length
  }
}
