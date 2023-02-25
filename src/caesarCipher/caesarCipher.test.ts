import { caesarCipher } from './caesarCipher'

describe('caesarCipher', () => {
  it('should shift letters by the specified amount', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('hello world', 13)).toBe('uryyb jbeyq')
  })

  it('should preserve case and non-alphabetic characters', () => {
    expect(caesarCipher('Hello, World!', 13)).toBe('Uryyb, Jbeyq!')
    expect(caesarCipher('123', 1)).toBe('123')
    expect(caesarCipher('!@#$%^&*()', 4)).toBe('!@#$%^&*()')
  })

  it('should handle large shift values', () => {
    expect(caesarCipher('abc', 26)).toBe('abc')
    expect(caesarCipher('abc', 52)).toBe('abc')
    expect(caesarCipher('abc', 53)).toBe('bcd')
  })

  it('should handle negative shift values', () => {
    expect(caesarCipher('abc', -1)).toBe('zab')
  })
})
