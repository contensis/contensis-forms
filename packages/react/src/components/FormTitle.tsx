import React from 'react';
import { FormContentType, Nullable } from '../models';
import { Description, Heading } from './html';

type FormTitleProps = {
    form: Nullable<FormContentType>;
    showTitle?: boolean;
    showDescription?: boolean;
};

export function FormTitle({ form, showDescription, showTitle }: FormTitleProps) {
    return (
        <div className="form-header">
            {showTitle && (
                <Heading level="1" className="form-title">
                    {form?.name}
                </Heading>
            )}
            {showDescription && <Description className="form-description" description={form?.description} />}
        </div>
    );
}
