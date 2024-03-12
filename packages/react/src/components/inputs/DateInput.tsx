import { localisations } from '../../state';
import { useFormField } from '../FormContext';
import { errorsId, instructionsId } from '../utils';
import { DateItem } from './dates/DateItem';
import { DatePartKey, toDateParts, validateDateParts } from './dates/date-utils';
import { FormInputProps } from './models';

export function DateInput({ id }: FormInputProps) {
    const field = useFormField(id);
    const dateParts = toDateParts(field.inputValue);
    const validation = validateDateParts(dateParts);

    const onChange = (type: DatePartKey, value: string) => {
        const newDateParts = { ...dateParts, [type]: value };
        const newValidation = validateDateParts(newDateParts);
        field.onChange(newDateParts, newValidation.date);
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

    const refPart = (dayInvalid && 'day')
        || (monthInvalid && 'month')
        || (yearInvalid && 'year')
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
        </>
    );
}
