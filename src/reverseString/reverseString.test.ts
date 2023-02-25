import { reverseString } from './reverseString'

describe('reverseString', () => {
  it('should handle single letter words', () => {
    expect(reverseString('a')).toBe('a')
  })

  it('should handle strings containing spaces.', () => {
    expect(reverseString('test me')).toBe('em tset')
  })

  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('world')).toBe('dlrow')
    expect(reverseString('typescript')).toBe('tpircsepyt')
  })

  it('should return an empty string if given an empty string', () => {
    expect(reverseString('')).toBe('')
  })

  it('should handle special characters and whitespace', () => {
    expect(reverseString('!@#$%^&*()_+')).toBe('+_)(*&^%$#@!')
    expect(reverseString(' \t\n\r\f\v')).toBe('\v\f\r\n\t ')
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH')
  })
})
