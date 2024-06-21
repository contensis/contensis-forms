import { FormFieldErrors } from './FormFieldErrors';
import { FormFieldFooter } from './FormFieldFooter';
import { FormFieldInstructions } from './FormFieldInstructions';
import { FormFieldLabel } from './FormFieldLabel';
import { FormContainerProps } from './models';
import { formFieldCss } from './utils';

export function FormField(props: FormContainerProps) {
    return (
        <div className={formFieldCss(props, 'field')}>
            <FormFieldLabel {...props} />
            <FormFieldInstructions {...props} />
            <FormFieldErrors {...props} />
            <div className="form-field-input-container">{props.children}</div>
            <FormFieldFooter {...props} />
        </div>
    );
}
