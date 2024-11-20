import { convertToUnicode, UnicodeStyle, UnicodeConversionError } from '../src';

describe('Unicode Text Converter', () => {
  test('should correctly convert to math bold', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.MATH_BOLD);
    expect(result).toBe('𝐇𝐞𝐥𝐥𝐨');
  });

  test('should keep unsupported characters unchanged', () => {
    const input = 'Hello!';
    const result = convertToUnicode(input, UnicodeStyle.MATH_BOLD);
    expect(result).toBe('𝐇𝐞𝐥𝐥𝐨!');
  });

  test('should throw error for invalid style', () => {
    const input = 'Hello';
    expect(() => {
      convertToUnicode(input, 'INVALID_STYLE' as UnicodeStyle);
    }).toThrow(UnicodeConversionError);
  });
}); 