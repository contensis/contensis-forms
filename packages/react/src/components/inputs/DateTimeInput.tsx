import { localisations } from '../../state';
import { useFormField } from '../FormContext';
import { errorsId, instructionsId } from '../utils';
import { DateItem } from './dates/DateItem';
import { DateTimePartKey, toDateTimeParts, validateDateTimeParts } from './dates/date-utils';
import { FormInputProps } from './models';

export function DateTimeInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const dateParts = toDateTimeParts(field.inputValue);
    const validation = validateDateTimeParts(dateParts);

    const onChange = (type: DateTimePartKey, value: string) => {
        const newDateParts = { ...dateParts, [type]: value };
        const newValidation = validateDateTimeParts(newDateParts);
        field.onChange(newDateParts, newValidation.datetime);
    };
    const onFocus = () => {
        field.onFocus();
    };
    const onBlur = () => {
        field.onBlur();
    };
    
    const instructionsHtmlId = instructionsId(field);
    const errorsHtmlId = errorsId(field);

    const day = dateParts.day || '';
    const dayInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('day')));

    const month = dateParts.month || '';
    const monthInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('month')));

    const year = dateParts.year || '';
    const yearInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('year')));

    const hour = dateParts.hour || '';
    const hourInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('hour')));

    const minute = dateParts.minute || '';
    const minuteInvalid = field.showErrors && !!field.errors && (!validation.invalid || (validation.invalid.includes('minute')));

    const refPart = (dayInvalid && 'day')
        || (monthInvalid && 'month')
        || (yearInvalid && 'year')
        || (hourInvalid && 'hour')
        || (minuteInvalid && 'minute')
        || 'day';

    return (
        <>
            <DateItem
                type="day"
                inputRef={(refPart === 'day') ? field.inputRef : undefined}
                label={localisations.dateInputDayLabel}
                htmlId={`${field.htmlId}-day`}
                invalid={dayInvalid}
                value={day}
                autoComplete={field.autoFill}
                hasInstructions={!!field.instructions}
                instructionsHtmlId={instructionsHtmlId}
                errorsHtmlId={errorsHtmlId}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <DateItem
                type="month"
                inputRef={(refPart === 'month') ? field.inputRef : undefined}
                label={localisations.dateInputMonthLabel}
                htmlId={`${field.htmlId}-month`}
                invalid={monthInvalid}
                value={month}
                autoComplete={field.autoFill}
                hasInstructions={!!field.instructions}
                instructionsHtmlId={instructionsHtmlId}
                errorsHtmlId={errorsHtmlId}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <DateItem
                type="year"
                inputRef={(refPart === 'year') ? field.inputRef : undefined}
                label={localisations.dateInputYearLabel}
                htmlId={`${field.htmlId}-year`}
                invalid={yearInvalid}
                value={year}
                autoComplete={field.autoFill}
                hasInstructions={!!field.instructions}
                instructionsHtmlId={instructionsHtmlId}
                errorsHtmlId={errorsHtmlId}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
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
