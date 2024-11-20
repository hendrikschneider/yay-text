import { StyleMap, UnicodeStyle } from './types';

export const UNICODE_MAPS: StyleMap = {
  [UnicodeStyle.NORMAL]: {},
  [UnicodeStyle.MATH_BOLD]: {
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂',
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜',
  },
  [UnicodeStyle.MATH_ITALIC]: {
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶',
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐',
  },
  [UnicodeStyle.MATH_BOLD_ITALIC]: {},
  [UnicodeStyle.MONOSPACE]: {},
  [UnicodeStyle.FULLWIDTH]: {},
  [UnicodeStyle.SANS_SERIF]: {},
  [UnicodeStyle.SANS_SERIF_BOLD]: {},
  [UnicodeStyle.SANS_SERIF_ITALIC]: {},
};

export const SUPPORTED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';