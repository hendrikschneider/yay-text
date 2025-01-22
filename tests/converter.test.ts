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

  test('should correctly convert to math bold italic', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.MATH_BOLD_ITALIC);
    expect(result).toBe('𝑯𝒆𝒍𝒍𝒐');
  });

  test('should correctly convert to monospace', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.MONOSPACE);
    expect(result).toBe('𝙷𝚎𝚕𝚕𝚘');
  });

  test('should correctly convert to fullwidth', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.FULLWIDTH);
    expect(result).toBe('Ｈｅｌｌｏ');
  });

  test('should correctly convert to sans serif', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.SANS_SERIF);
    expect(result).toBe('𝖧𝖾𝗅𝗅𝗈');
  });

  test('should correctly convert to sans serif bold', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.SANS_SERIF_BOLD);
    expect(result).toBe('𝗛𝗲𝗹𝗹𝗼');
  });

  test('should correctly convert to sans serif italic', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.SANS_SERIF_ITALIC);
    expect(result).toBe('𝘏𝘦𝘭𝘭𝘰');
  });
});
