import { MutableRefObject, ReactNode, createContext, useContext } from 'react';
import { Dictionary, FieldEditorType, FormFieldContainer, FormState } from '../models';
import { Form, reduceFields, useStoreSelector } from '../state';

const FormContext = createContext<null | Form>(null);

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
    const form = useContext(FormContext);
    if (!form) {
        throw new Error('Form has not been initialised');
    }
    return form;
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

export const DEFAULT_CONTAINERS_TYPES: Record<FieldEditorType, FormFieldContainer> = {
    checkbox: 'checkbox',
    date: 'control',
    datetime: 'control',
    decimal: 'control',
    email: 'control',
    integer: 'control',
    multiline: 'control',
    multiselect: 'fieldset',
    radio: 'fieldset',
    reference: 'control',
    select: 'control',
    tel: 'control',
    text: 'control',
    time: 'control',
    url: 'control'
};
