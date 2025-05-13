import { UnicodeStyle, UnicodeConversionError } from "./types";
import { UNICODE_MAPS, SUPPORTED_CHARS } from "./constants";

export class UnicodeConverter {
  public static convert(text: string, style: UnicodeStyle): string {
    if (!Object.values(UnicodeStyle).includes(style)) {
      throw new UnicodeConversionError(`Unsupported style: ${style}`);
    }

    if (style === UnicodeStyle.NORMAL) {
      // Properly typed reverse map
      const UnicodeToUTF8Map: Record<string, string> = {};

      // Iterate through all style maps except NORMAL
      for (const styleKey in UNICODE_MAPS) {
        if (styleKey === UnicodeStyle.NORMAL) continue;
        const map = UNICODE_MAPS[styleKey as UnicodeStyle];
        for (const normalChar in map) {
          const unicodeChar = map[normalChar];
          UnicodeToUTF8Map[unicodeChar] = normalChar;
        }
      }

      const decodedText = Array.from(text)
        .map((char) => UnicodeToUTF8Map[char] || char)
        .join("");

      return decodedText;
    }

    const styleMap = UNICODE_MAPS[style];
    return Array.from(text)
      .map((char) => {
        if (!SUPPORTED_CHARS.includes(char)) {
          return char; // Keep unsupported characters unchanged
        }
        return styleMap[char] || char;
      })
      .join("");
  }

  public static getSupportedStyles(): UnicodeStyle[] {
    return Object.values(UnicodeStyle);
  }

  public static getSupportedCharacters(): string {
    return SUPPORTED_CHARS;
  }
}
