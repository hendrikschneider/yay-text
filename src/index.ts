import {UnicodeConverter} from './converter';
import {UnicodeStyle, UnicodeConversionError} from './types';
import {SUPPORTED_CHARS} from './constants';

export {UnicodeConverter, UnicodeStyle, UnicodeConversionError, SUPPORTED_CHARS};

export function convertToUnicode(text: string, style: UnicodeStyle): string {
    return UnicodeConverter.convert(text, style);
} 