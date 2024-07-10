import { FieldEditorType } from '../../models';
import { FormInput } from '../models';
import { CheckboxInput } from './CheckboxInput';
import { DateInput } from './DateInput';
import { DatePartsInput } from './DatePartsInput';
import { DateTimeInput } from './DateTimeInput';
import { DateTimePartsInput } from './DateTimePartsInput';
import { DecimalInput } from './DecimalInput';
import { EmailInput } from './EmailInput';
import { IntegerInput } from './IntegerInput';
import { MultiSelectInput } from './MultiSelectInput';
import { MultilineInput } from './MultilineInput';
import { RadioInput } from './RadioInput';
import { ReferenceInput } from './ReferenceInput';
import { SelectInput } from './SelectInput';
import { TelInput } from './TelInput';
import { TextInput } from './TextInput';
import { TimeInput } from './TimeInput';
import { TimePartsInput } from './TimePartsInput';
import { UrlInput } from './UrlInput';

export const DEFAULT_INPUTS: Record<FieldEditorType, FormInput> = {
    checkbox: CheckboxInput,
    date: DateInput,
    dateparts: DatePartsInput,
    datetime: DateTimeInput,
    datetimeparts: DateTimePartsInput,
    decimal: DecimalInput,
    email: EmailInput,
    integer: IntegerInput,
    multiline: MultilineInput,
    multiselect: MultiSelectInput,
    radio: RadioInput,
    reference: ReferenceInput,
    select: SelectInput,
    tel: TelInput,
    text: TextInput,
    time: TimeInput,
    timeparts: TimePartsInput,
    url: UrlInput
};
