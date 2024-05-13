import { FieldEditorType } from '../../models';
import { CheckboxInput } from './CheckboxInput';
import { DateInput } from './DateInput';
import { DateTimeInput } from './DateTimeInput';
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
import { UrlInput } from './UrlInput';
import { FormInput } from './models';

export const DEFAULT_INPUTS: Record<FieldEditorType, FormInput> = {
    checkbox: CheckboxInput,
    date: DateInput,
    datetime: DateTimeInput,
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
    url: UrlInput
};
