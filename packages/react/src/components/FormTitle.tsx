import React from 'react';
import { FormContentType, Nullable } from '../models';
import { Description, Heading } from './html';

type FormTitleProps = { form: Nullable<FormContentType> };

export function FormTitle({ form }: FormTitleProps) {
    return (
        <div className="form-header">
            <Heading level="1" className="form-title">
                {form?.name}
            </Heading>
            <Description className="form-description" description={form?.description} />
        </div>
    );
}
