import { MutableRefObject, ReactNode, createContext, useContext, useMemo } from 'react';
import { Dictionary, FieldEditorType, FormField, FormFieldContainer, FormState } from '../models';
import { Form, useStoreSelector, reduceFields } from '../state';

const FormContext = createContext<Form>(null as any as Form);

type FormContextProviderProps = {
    form: Form;
    children?: ReactNode;
};

export function FormContextProvider(props: FormContextProviderProps) {
    return (
        <FormContext.Provider value={props.form}>
            <FormFieldRefProvider>
                {props.children}
            </FormFieldRefProvider>
        </FormContext.Provider>
    );
}

export function useForm() {
    return useContext(FormContext);
}

const FormFieldRefContext = createContext<Dictionary<MutableRefObject<HTMLElement | undefined>>>({});

function FormFieldRefProvider(props: { children?: ReactNode }) {
    const form = useFormSelector(f => f.selectForm);
    const refs = reduceFields(form, () => ({ current: undefined }));
    return (
        <FormFieldRefContext.Provider value={refs}>
            {props.children}
        </FormFieldRefContext.Provider>
    );
}

export function useFieldRefs() {
    return useContext(FormFieldRefContext);
}


export function useFormSelector<TResult>(getSelector: (form: Form) => (state: FormState) => TResult) {
    const form = useForm();
    return useStoreSelector(form, getSelector(form));
}

const DEFAULT_CONTAINERS: Record<FieldEditorType, FormFieldContainer> = {
    checkbox: 'control',
    date: 'fieldset',
    datetime: 'fieldset',
    decimal: 'control',
    email: 'control',
    integer: 'control',
    multiline: 'control',
    multiselect: 'fieldset',
    radio: 'fieldset',
    select: 'control',
    tel: 'control',
    text: 'control',
    time: 'control',
    url: 'control'
};

export function useFormField(id: string): FormField {
    const form = useForm();
    const field = useStoreSelector(form, form.selectField(id));
    const refs = useFieldRefs();
    return useMemo(() => {
        const onChange = (inputValue: any, value?: any) => {
            value = (typeof value === 'undefined') ? inputValue : value;
            form.setInputValue(field.id, inputValue);
            form.setValue(field.id, value);
        };
        const onFocus = () => {
            form.setFocussed(field.id, true);
        };
        const onBlur = () => {
            form.setFocussed(field.id, false);            
        };

        return {
            ...field,
            inputRef: refs[field.id],
            formFieldContainer: DEFAULT_CONTAINERS[field.editor],
            onChange,
            onFocus,
            onBlur
        };
    }, [form, field, refs]);
}
