import { convertToUnicode, UnicodeStyle, UnicodeConversionError } from '../src';

describe('Unicode Text Converter', () => {
  test('应该正确转换为数学粗体', () => {
    const input = 'Hello';
    const result = convertToUnicode(input, UnicodeStyle.MATH_BOLD);
    expect(result).toBe('𝐇𝐞𝐥𝐥𝐨');
  });

  test('应该保持不支持的字符不变', () => {
    const input = 'Hello! 你好';
    const result = convertToUnicode(input, UnicodeStyle.MATH_BOLD);
    expect(result).toBe('𝐇𝐞𝐥𝐥𝐨! 你好');
  });

  test('应该对无效样式抛出错误', () => {
    const input = 'Hello';
    expect(() => {
      convertToUnicode(input, 'INVALID_STYLE' as UnicodeStyle);
    }).toThrow(UnicodeConversionError);
  });
}); 