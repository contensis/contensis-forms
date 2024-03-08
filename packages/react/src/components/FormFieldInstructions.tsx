import { useFormField } from './FormContext';
import { instructionsId } from './utils';

type FormFieldInstructionsProps = { id: string };

export function FormFieldInstructions(props: FormFieldInstructionsProps) {
    const field = useFormField(props.id);
    return field.instructions
        ? (
            <div id={instructionsId(field)} className="form-field-instructions">{field.instructions}</div>
        ) : null;
}
