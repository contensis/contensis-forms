import { useMemo } from 'react';
import { Nullable } from '../../models';
import { Renderers } from './renderer';

export function Description(props: { id?: string; className: string; description: Nullable<string> }) {
    const description = useMemo(() => getDescriptionHtml(props.description), [props.description]);
    return !!description ? <div id={props.id} className={props.className} dangerouslySetInnerHTML={{ __html: description }}></div> : null;
}

function getDescriptionHtml(description: Nullable<string>) {
    if (!description) {
        return '';
    }
    return Renderers.markdown(description);
}
