export function caesarCipher (str: string, shift: number): string {
  if (shift < 0) {
    shift = 26 + (shift % 26)
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase()
    const index = alphabet.indexOf(char)

    if (index === -1) {
      // If the character is not in the alphabet, leave it unchanged
      result += char
    } else {
      // Otherwise, apply the shift to the index and use the shifted alphabet
      const shiftedIndex = (index + shift) % alphabet.length
      const shiftedChar = alphabet[shiftedIndex]
      console.log(shiftedChar)

      // Preserve the original case of the character
      result += str[i] === char ? shiftedChar : shiftedChar.toUpperCase()
    }
  }

  return result
}
