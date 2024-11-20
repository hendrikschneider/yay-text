import { UnicodeStyle, UnicodeConversionError } from './types';
import { UNICODE_MAPS, SUPPORTED_CHARS } from './constants';

export class UnicodeConverter {
  public static convert(text: string, style: UnicodeStyle): string {
    if (!Object.values(UnicodeStyle).includes(style)) {
      throw new UnicodeConversionError(`Unsupported style: ${style}`);
    }

    if (style === UnicodeStyle.NORMAL) {
      return text;
    }

    const styleMap = UNICODE_MAPS[style];
    return Array.from(text).map(char => {
      if (!SUPPORTED_CHARS.includes(char)) {
        return char; // Keep unsupported characters unchanged
      }
      return styleMap[char] || char;
    }).join('');
  }

  public static getSupportedStyles(): UnicodeStyle[] {
    return Object.values(UnicodeStyle);
  }

  public static getSupportedCharacters(): string {
    return SUPPORTED_CHARS;
  }
} 