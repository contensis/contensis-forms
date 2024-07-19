import { FormInputProps } from './models';

type AttrArg = undefined | null | string | string[] | Record<string, boolean>;

type FieldInputProps = Pick<
    FormInputProps,
    'htmlId' | 'showErrors' | 'errors' | 'inputRef' | 'autoFill' | 'placeholder' | 'rows' | 'instructions' | 'maxLength' | 'cssClass' | 'labelPosition'
>;

export function attr(...args: AttrArg[]) {
    const keys = args.reduce<string[]>((prev, arg) => {
        if (arg) {
            if (typeof arg === 'string') {
                prev.push(arg);
            } else if (Array.isArray(arg)) {
                prev.push(...arg.filter((a) => !!a));
            } else {
                Object.keys(arg)
                    .filter((key) => !!arg[key])
                    .forEach((key) => prev.push(key));
            }
        }
        return prev;
    }, []);
    return keys.length ? keys.join(' ') : undefined;
}

export function progressId(htmlId: string) {
    return `${htmlId}-progress`;
}

export function inputId(inputs: Pick<FormInputProps, 'htmlId'>) {
    return inputs.htmlId;
}

export function instructionsId(inputs: Pick<FormInputProps, 'htmlId'>) {
    return `${inputs.htmlId}-instructions`;
}

export function errorsId(inputs: Pick<FormInputProps, 'htmlId'>) {
    return `${inputs.htmlId}-errors`;
}

export function charCountId(inputs: Pick<FormInputProps, 'htmlId'>) {
    return `${inputs.htmlId}-char-count`;
}

function inputClassname(inputs: FieldInputProps, fieldType: string) {
    return attr(`form-${fieldType}-input`, {
        [`form-${fieldType}-input-has-error`]: inputs.showErrors && !!inputs.errors
    });
}

type InputSettings = {
    autoComplete?: string;
    placeholder?: boolean;
    inputMode?: 'numeric' | 'decimal';
};

export function inputAttrs(inputs: FieldInputProps, fieldType: string, settings: InputSettings) {
    const invalid = inputs.showErrors && !!inputs.errors;
    return {
        ref: inputs.inputRef,
        className: !!fieldType ? inputClassname(inputs, fieldType) : undefined,
        id: inputs.htmlId,
        name: inputs.htmlId,
        autoComplete: inputs.autoFill || settings?.autoComplete,
        rows: inputs.rows || undefined,
        placeholder: (settings.placeholder && inputs.placeholder) || undefined,
        inputMode: settings?.inputMode || undefined,
        'aria-invalid': invalid,
        'aria-describedby': attr({
            [instructionsId(inputs)]: !!inputs.instructions,
            [errorsId(inputs)]: invalid,
            [charCountId(inputs)]: !!inputs.maxLength
        })
    };
}

type ChildInputSettings = {
    autoComplete?: string;
    placeholder?: string;
    name: string;
    inputMode?: 'numeric' | 'decimal';
};

export function childInputAttrs(inputs: FieldInputProps, fieldType: string, settings: ChildInputSettings) {
    const invalid = inputs.showErrors && !!inputs.errors;
    return {
        ref: inputs.inputRef,
        className: !!fieldType ? inputClassname(inputs, `${fieldType}-${settings.name}`) : undefined,
        id: `${inputs.htmlId}-${settings.name}`,
        name: settings.name,
        autoComplete: settings?.autoComplete || undefined,
        placeholder: settings?.placeholder || undefined,
        inputMode: settings?.inputMode || undefined,
        'aria-invalid': invalid,
        'aria-describedby': attr({
            [instructionsId(inputs)]: !!inputs.instructions,
            [errorsId(inputs)]: invalid,
            [charCountId(inputs)]: !!inputs.maxLength
        })
    };
}

export function textValue(value: unknown): string {
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number') {
        return `${value}`;
    }
    return '';
}

export function formFieldCss(inputs: FieldInputProps, formFieldType: 'field' | 'fieldset' | 'checkbox-field') {
    return attr(
        `form-${formFieldType}`,
        [
            inputs.cssClass || '',
            inputs.labelPosition === 'top' ? `form-${formFieldType}-label-top` : '',
            inputs.labelPosition === 'leftAligned' ? `form-${formFieldType}-label-left` : ''
        ],
        {
            [`form-${formFieldType}-has-error`]: inputs.showErrors && !!inputs.errors
        }
    );
}
