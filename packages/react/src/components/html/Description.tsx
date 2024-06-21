import { useMemo } from 'react';
import { Nullable, StringOrCanvas } from '../../models';
import { Renderers } from './renderer';

export function Description(props: { id?: string; className: string; description: Nullable<StringOrCanvas> }) {
    const description = useMemo(() => getDescriptionHtml(props.description), [props.description]);
    return !!description ? <div id={props.id} className={props.className} dangerouslySetInnerHTML={{ __html: description }}></div> : null;
}

function getDescriptionHtml(description: Nullable<StringOrCanvas>) {
    if (!description) {
        return '';
    }
    return typeof description === 'string' ? Renderers.markdown(description) : Renderers.canvas({ data: description });
}
