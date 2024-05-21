import { useFormSelector } from './FormContext';
import { Description } from './html';

export function FormTitle() {
    const form = useFormSelector(f => f.selectForm);
    return (
        <div className="form-header">
            <h3 className="form-title">{form?.name}</h3>
            <Description className="form-description" description={form?.description} />
        </div>
    );
}
