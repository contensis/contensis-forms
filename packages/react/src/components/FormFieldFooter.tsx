import React, { useContext } from 'react';
import { FormLocalizations } from '../models';
import { format, plural } from '../state';
import { FormRenderContext } from './FormRenderContext';
import { FormInputProps } from './models';
import { attr, charCountId } from './utils';

export function FormFieldFooter({ value, maxLength, ...attrs }: FormInputProps) {
    const { language, localizations } = useContext(FormRenderContext);
    let message = '';
    let remaining = 0;
    if (maxLength) {
        const v = !!value ? `${value}` : '';
        remaining = maxLength - v.length;
        message = getCharCountMessage(language,  remaining, localizations);
    }

    return message ? (
        <div id={charCountId(attrs)} className={attr('form-field-char-count', { 'field-char-count-error': remaining < 0 })}>
            {message}
        </div>
    ) : null;
}

function getCharCountMessage(language: string, remaining: number, localizations: FormLocalizations) {
    const exceeded = -1 * remaining;
    return remaining < 0
        ? plural(language, exceeded, {
              zero: () => format(localizations.characterCount.exceeded.zero, exceeded),
              one: () => format(localizations.characterCount.exceeded.one, exceeded),
              two: () => format(localizations.characterCount.exceeded.two, exceeded),
              few: () => format(localizations.characterCount.exceeded.few, exceeded),
              many: () => format(localizations.characterCount.exceeded.many, exceeded),
              other: () => format(localizations.characterCount.exceeded.other, exceeded)
          })
        : plural(language, remaining, {
              zero: () => format(localizations.characterCount.remaining.zero, remaining),
              one: () => format(localizations.characterCount.remaining.one, remaining),
              two: () => format(localizations.characterCount.remaining.two, remaining),
              few: () => format(localizations.characterCount.remaining.few, remaining),
              many: () => format(localizations.characterCount.remaining.many, remaining),
              other: () => format(localizations.characterCount.remaining.other, remaining)
          });
}
