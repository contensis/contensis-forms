import { MutableRefObject } from 'react';
import { Dictionary, FormContentType, FormPage, Nullable, ValidationError } from '../models';
import { FormFieldContainer } from './FormFieldContainer';
import { FormValidationSummary } from './FormValidationSummary';
import { Description } from './html';
import { SetFocussed, SetValue } from './models';

type FormCurrentPageProps = {
    currentPage: FormPage;
    form: Nullable<FormContentType>;

    formHtmlId: string;

    formValue: Dictionary<unknown>;
    formInputValue: Dictionary<unknown>;
    formErrors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    showErrors: boolean;
    inputRefs: Dictionary<MutableRefObject<any>>;

    setValue: SetValue;
    setInputValue: SetValue;
    setFocussed: SetFocussed;
};

export function FormCurrentPage({
    currentPage,
    form,
    formHtmlId,
    formValue,
    formInputValue,
    formErrors,
    showErrors,
    setFocussed,
    setInputValue,
    setValue,
    inputRefs
}: FormCurrentPageProps) {
    return (
        <div className="form-current-page">
            <div className="form-current-page-header">
                <h3 className="form-current-page-title">{currentPage?.title}</h3>
                <Description className="form-current-page-description" description={currentPage.description} />
            </div>
            <FormValidationSummary currentPage={currentPage} form={form} showErrors={showErrors} formErrors={formErrors} inputRefs={inputRefs} />
            <div className="form-fields-container">
                {currentPage?.fields
                    ? currentPage.fields.map((field) => (
                          <FormFieldContainer
                              key={field.id}
                              field={field}
                              formHtmlId={formHtmlId}
                              formValue={formValue}
                              formInputValue={formInputValue}
                              formErrors={formErrors}
                              showErrors={showErrors}
                              inputRefs={inputRefs}
                              setFocussed={setFocussed}
                              setInputValue={setInputValue}
                              setValue={setValue}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
}
