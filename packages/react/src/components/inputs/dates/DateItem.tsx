import { MutableRefObject } from 'react';
import { attr, textValue } from '../../utils';
import { DatePartKey, DateTimePartKey } from './date-utils';
import { Nullable } from '../../../models';

type DateItemProps = {
    type: DateTimePartKey;
    inputRef: undefined | MutableRefObject<any>;
    label: string;
    htmlId: string;
    invalid: boolean;
    hasInstructions: boolean;
    value: string;
    autoComplete?: Nullable<string>;
    instructionsHtmlId: string;
    errorsHtmlId: string
    onChange(type: DateTimePartKey, value: string): void;
    onFocus(type: DateTimePartKey): void;
    onBlur(type: DateTimePartKey): void;
};

const DatePartKeys: Record<DateTimePartKey, boolean> = {
    year: true,
    month: true,
    day: true,
    hour: false,
    minute: false
};

export function DateItem({
    inputRef,
    type,
    label,
    htmlId,
    invalid,
    hasInstructions,
    value,
    autoComplete,
    instructionsHtmlId,
    errorsHtmlId,
    onChange,
    onFocus,
    onBlur
}: DateItemProps) {
    const inputAutoComplete = ((autoComplete === 'bday') && DatePartKeys[type])
        ? `${autoComplete}-${type}`
        : undefined;
    return (
        <div className="form-date-item">
            <div className="form-field-label-container">
                <label className="form-field-label" htmlFor={htmlId}>{label}</label>
            </div>
            <input
                type="text"
                ref={inputRef}
                className={attr(`form-date-${type}-input`, { [`form-date-${type}-input-has-error`]: invalid })}
                id={htmlId}
                name={htmlId}
                value={textValue(value)}
                spellCheck="false"
                autoComplete={inputAutoComplete}
                inputMode="numeric"
                pattern="[0-9]*"
                aria-invalid={invalid}
                aria-describedby={attr({ [instructionsHtmlId]: hasInstructions, [errorsHtmlId]: invalid })}
                onChange={e => onChange(type, e.target.value)}
                onFocus={() => onFocus(type)}
                onBlur={() => onBlur(type)}
            />
        </div>
    );
}
