import React, { MutableRefObject } from 'react';
import { Dictionary, FormPage, Nullable, ValidationError } from '../models';
import { FormFieldContainer } from './FormFieldContainer';
import { FormValidationSummary } from './FormValidationSummary';
import { Description, Heading } from './html';
import { SetFocussed, SetValue } from './models';

type FormCurrentPageProps = {
    currentPage: FormPage;
    formHtmlId: string;
    formValue: Dictionary<unknown>;
    formInputValue: Dictionary<unknown>;
    formErrors: Dictionary<Nullable<Dictionary<ValidationError>>>;
    showErrors: boolean;
    inputRefs: Dictionary<MutableRefObject<any>>;
    setValue: SetValue;
    setInputValue: SetValue;
    setFocussed: SetFocussed;
    showTitle: boolean;
};

export function FormCurrentPage({
    currentPage,
    formHtmlId,
    formValue,
    formInputValue,
    formErrors,
    showErrors,
    setFocussed,
    setInputValue,
    setValue,
    showTitle,
    inputRefs
}: FormCurrentPageProps) {
    return (
        <div className="form-current-page">
            <div className="form-current-page-header">
                {showTitle && (
                    <Heading level="2" className="form-current-page-title">
                        {currentPage?.title}
                    </Heading>
                )}
                <Description className="form-current-page-description" description={currentPage.description} />
            </div>
            <FormValidationSummary currentPage={currentPage} showErrors={showErrors} formErrors={formErrors} inputRefs={inputRefs} />
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
