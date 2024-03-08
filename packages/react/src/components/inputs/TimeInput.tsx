import { localisations } from '../../state';
import { useFormField } from '../FormContext';
import { errorsId, instructionsId } from '../utils';
import { DateItem } from './dates/DateItem';
import { TimePartKey, toTimeParts, validateTimeParts } from './dates/date-utils';
import { FormInputProps } from './models';

export function TimeInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const timeParts = toTimeParts(field.inputValue);
    const validation = validateTimeParts(timeParts);

    const onChange = (type: TimePartKey, value: string) => {
        const newTimeParts = { ...timeParts, [type]: value };
        const newValidation = validateTimeParts(newTimeParts);
        field.onChange(newTimeParts, newValidation.time);
    };
    const onFocus = () => {
        field.onFocus();
    };
    const onBlur = () => {
        field.onBlur();
    };

    const instructionsHtmlId = instructionsId(field);
    const errorsHtmlId = errorsId(field);

    const hour = timeParts.hour || '';
    const hourInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('hour')));

    const minute = timeParts.minute || '';
    const minuteInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('minute')));

    const refPart = (hourInvalid && 'hour')
        || (minuteInvalid && 'minute')
        || 'hour';

    return (
        <>
            <DateItem
                type="hour"
                inputRef={(refPart === 'hour') ? field.inputRef : undefined}
                label={localisations.dateInputHourLabel}
                htmlId={`${field.htmlId}-hour`}
                invalid={hourInvalid}
                value={hour}
                hasInstructions={!!field.instructions}
                instructionsHtmlId={instructionsHtmlId}
                errorsHtmlId={errorsHtmlId}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <DateItem
                type="minute"
                inputRef={(refPart === 'minute') ? field.inputRef : undefined}
                label={localisations.dateInputMinuteLabel}
                htmlId={`${field.htmlId}-minute`}
                invalid={minuteInvalid}
                value={minute}
                hasInstructions={!!field.instructions}
                instructionsHtmlId={instructionsHtmlId}
                errorsHtmlId={errorsHtmlId}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    );
}
