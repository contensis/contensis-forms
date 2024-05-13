import { useFormField } from './FormContext';
import { Description } from './html';
import { instructionsId } from './utils';

type FormFieldInstructionsProps = { id: string };

export function FormFieldInstructions(props: FormFieldInstructionsProps) {
    const field = useFormField(props.id);
    return (<Description id={instructionsId(field)} className="form-field-instructions" description={field.instructions} />);
}
