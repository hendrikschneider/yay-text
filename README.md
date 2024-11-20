# Unicode Text Converter

Convert regular text into various Unicode variant forms.

## Installation

```bash
npm install yay-text
```

## Quick Start

```typescript
import {convertToUnicode, UnicodeStyle} from 'yay-text';
// Basic conversion
const text = convertToUnicode('Hello', UnicodeStyle.MATH_BOLD);
console.log(text); // 𝐇𝐞𝐥𝐥𝐨
// Different styles
console.log(convertToUnicode('Hello', UnicodeStyle.MATH_ITALIC)); // 𝐻𝑒𝑙𝑙𝑜
console.log(convertToUnicode('Hello', UnicodeStyle.FULLWIDTH)); // Ｈｅｌｌｏ
console.log(convertToUnicode('Hello', UnicodeStyle.SANS_SERIF_BOLD)); // 𝗛𝗲𝗹𝗹𝗼
```

## Available Styles

| Style               | Example    | Description              |
|---------------------|------------|--------------------------|
| `NORMAL`            | Hello      | Regular text             |
| `MATH_BOLD`         | 𝐇𝐞𝐥𝐥𝐨 | Mathematical Bold        |
| `MATH_ITALIC`       | 𝐻𝑒𝑙𝑙𝑜 | Mathematical Italic      |
| `MATH_BOLD_ITALIC`  | 𝑯𝒆𝒍𝒍𝒐 | Mathematical Bold Italic |
| `MONOSPACE`         | 𝙷𝚎𝚕𝚕𝚘 | Monospace                |
| `FULLWIDTH`         | Ｈｅｌｌｏ      | Fullwidth                |
| `SANS_SERIF`        | 𝖧𝖾𝗅𝗅𝗈 | Sans-serif               |
| `SANS_SERIF_BOLD`   | 𝗛𝗲𝗹𝗹𝗼 | Sans-serif Bold          |
| `SANS_SERIF_ITALIC` | 𝘏𝘦𝘭𝘭𝘦 | Sans-serif Italic        |

## Error Handling

```typescript
import {convertToUnicode, UnicodeStyle, UnicodeConversionError} from 'yay-text';

try {
    const text = convertToUnicode('Hello', 'INVALID_STYLE' as UnicodeStyle);
} catch (error) {
    if (error instanceof UnicodeConversionError) {
        console.error(error.message); // "Unsupported style: INVALID_STYLE"
    }
}
```

## Advanced Usage

```typescript
import {UnicodeConverter} from 'yay-text';
// Get all supported styles
const styles = UnicodeConverter.getSupportedStyles();
// Get supported characters
const chars = UnicodeConverter.getSupportedCharacters();
```

## Supported Characters

- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)

Note: Unsupported characters (spaces, punctuation, etc.) remain unchanged.

## License

MIT

## Live Demo

Check out [YayText](https://yaytext.app/) - a website that uses this package to generate fancy Unicode text styles for social media and other purposes.
