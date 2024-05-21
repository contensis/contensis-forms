import { FormField, Nullable } from '../models';

type AttrArg = undefined | null | string | string[] | Record<string, boolean>;

export function attr(...args: AttrArg[]) {
    const keys = args.reduce<string[]>((prev, arg) => {
        if (arg) {
            if (typeof arg === 'string') {
                prev.push(arg);
            } else if (Array.isArray(arg)) {
                prev.push(...arg.filter(a => !!a));
            } else {
                Object.keys(arg)
                    .filter(key => !!arg[key])
                    .forEach(key => prev.push(key));
            }
        }
        return prev;
    }, []);
    return keys.length ? keys.join(' ') : undefined;
}

export function progressId(htmlId: string) {
    return `${htmlId}-progress`;
}

export function inputId(field: FormField) {
    return field.htmlId;
}

export function instructionsId(field: FormField) {
    return `${field.htmlId}-instructions`;
}

export function errorsId(field: FormField) {
    return `${field.htmlId}-errors`;
}

export function charCountId(field: FormField) {
    return `${field.htmlId}-char-count`;
}

function inputClassname(field: FormField, fieldType: string, additionalCss: Nullable<string[]>) {
    return attr(
        `form-${fieldType}-input`,
        additionalCss?.filter(suffix => !!suffix).map(suffix => `form-${fieldType}-input-${suffix}`),
        {
            [`form-${fieldType}-input-has-error`]: field.showErrors && !!field.errors
        }
    );
}

type InputSettings = {
    autoComplete?: string;
    cssSuffix?: string[]
};

export function inputAttrs(field: FormField, fieldType: string, settings?: InputSettings) {
    const invalid = field.showErrors && !!field.errors;
    return {
        ref: field.inputRef,
        className: !!fieldType ? inputClassname(field, fieldType, settings?.cssSuffix) : undefined,
        id: field.htmlId,
        name: field.htmlId,
        autoComplete: field.autoFill || settings?.autoComplete,
        'aria-invalid': invalid,
        'aria-describedby': attr({
            [instructionsId(field)]: !!field.instructions,
            [errorsId(field)]: invalid,
            [charCountId(field)]: !!field.maxLength
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

export function formFieldCss(field: FormField, formFieldType: 'field' | 'fieldset' | 'checkbox-field') {
    return attr(
        `form-${formFieldType}`, 
        [
            field.cssClass || '',
            (field.labelPosition === 'top') ? `form-${formFieldType}-label-top` : '',
            (field.labelPosition === 'leftAligned') ? `form-${formFieldType}-label-left` : ''
        ],
        { 
            [`form-${formFieldType}-has-error`]: field.showErrors && !!field.errors 
        }
    );
}