import { capitalize } from "./capitalize";


describe('capitalize', () => {
    it('should capitalize the first letter of a single word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });
  
    it('should handle single-letter words', () => {
      expect(capitalize('a')).toBe('A');
    });
  
    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });
  
    it('should handle multi-word strings', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('the quick brown fox')).toBe('The quick brown fox');
    });
  }); 