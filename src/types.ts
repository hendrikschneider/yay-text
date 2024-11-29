export enum UnicodeStyle {
    NORMAL = 'NORMAL',
    MATH_BOLD = 'MATH_BOLD',
    MATH_ITALIC = 'MATH_ITALIC',
    MATH_BOLD_ITALIC = 'MATH_BOLD_ITALIC',
    MONOSPACE = 'MONOSPACE',
    FULLWIDTH = 'FULLWIDTH',
    SANS_SERIF = 'SANS_SERIF',
    SANS_SERIF_BOLD = 'SANS_SERIF_BOLD',
    SANS_SERIF_ITALIC = 'SANS_SERIF_ITALIC'
}

export interface UnicodeMap {
    [key: string]: string;
}

export type StyleMap = Record<UnicodeStyle, UnicodeMap>;

export class UnicodeConversionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UnicodeConversionError';
    }
} 