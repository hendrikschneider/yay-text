import {StyleMap, UnicodeStyle} from './types';

export const UNICODE_MAPS: StyleMap = {
    [UnicodeStyle.NORMAL]: {},  // Normal text doesn't need mapping
    [UnicodeStyle.MATH_BOLD]: {
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄',
        'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
        'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎',
        'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
        'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘',
        'Z': '𝐙',
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞',
        'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
        'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨',
        'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
        'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲',
        'z': '𝐳'
    },
    [UnicodeStyle.MATH_ITALIC]: {
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸',
        'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
        'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂',
        'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
        'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌',
        'Z': '𝑍',
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒',
        'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
        'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜',
        'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
        'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦',
        'z': '𝑧'
    },
    [UnicodeStyle.MATH_BOLD_ITALIC]: {
        // Add mappings for MATH_BOLD_ITALIC
    },
    [UnicodeStyle.MONOSPACE]: {
        // Add mappings for MONOSPACE
    },
    [UnicodeStyle.FULLWIDTH]: {
        // Add mappings for FULLWIDTH
    },
    [UnicodeStyle.SANS_SERIF]: {
        // Add mappings for SANS_SERIF
    },
    [UnicodeStyle.SANS_SERIF_BOLD]: {
        // Add mappings for SANS_SERIF_BOLD
    },
    [UnicodeStyle.SANS_SERIF_ITALIC]: {
        // Add mappings for SANS_SERIF_ITALIC
    }
};

export const SUPPORTED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';