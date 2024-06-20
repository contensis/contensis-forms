import { FormContentType, Nullable } from '../models';
import { Description } from './html';

type FormTitleProps = { form: Nullable<FormContentType> };

export function FormTitle({ form }: FormTitleProps) {
    return (
        <div className="form-header">
            <h3 className="form-title">{form?.name}</h3>
            <Description className="form-description" description={form?.description} />
        </div>
    );
}
