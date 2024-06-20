import { Description } from './html';
import { FormInputProps } from './models';
import { instructionsId } from './utils';

export function FormFieldInstructions(props: FormInputProps) {
    return (<Description id={instructionsId(props)} className="form-field-instructions" description={props.instructions} />);
}
