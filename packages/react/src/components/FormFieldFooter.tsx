import React from 'react';
import { format, localisations, plural } from '../state';
import { FormInputProps } from './models';
import { attr, charCountId } from './utils';

export function FormFieldFooter({ value, maxLength, ...attrs }: FormInputProps) {
    let message = '';
    let remaining = 0;
    if (maxLength) {
        const v = !!value ? `${value}` : '';
        remaining = maxLength - v.length;
        message = getCharCountMessage(remaining);
    }

    return message ? (
        <div id={charCountId(attrs)} className={attr('form-field-char-count', { 'field-char-count-error': remaining < 0 })}>
            {message}
        </div>
    ) : null;
}

function getCharCountMessage(remaining: number) {
    const exceeded = -1 * remaining;
    return remaining < 0
        ? plural(exceeded, {
              zero: () => format(localisations.characterCountMessageExceededZero, exceeded),
              one: () => format(localisations.characterCountMessageExceededOne, exceeded),
              two: () => format(localisations.characterCountMessageExceededTwo, exceeded),
              few: () => format(localisations.characterCountMessageExceededFew, exceeded),
              many: () => format(localisations.characterCountMessageExceededMany, exceeded),
              other: () => format(localisations.characterCountMessageExceededOther, exceeded)
          })
        : plural(remaining, {
              zero: () => format(localisations.characterCountMessageRemainingZero, remaining),
              one: () => format(localisations.characterCountMessageRemainingOne, remaining),
              two: () => format(localisations.characterCountMessageRemainingTwo, remaining),
              few: () => format(localisations.characterCountMessageRemainingFew, remaining),
              many: () => format(localisations.characterCountMessageRemainingMany, remaining),
              other: () => format(localisations.characterCountMessageRemainingOther, remaining)
          });
}
