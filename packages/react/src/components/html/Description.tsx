import { useEffect, useState } from 'react';
import { Nullable, StringOrCanvas } from '../../models';
import { createMarkdownRenderer, createSimpleRenderer } from './renderer';

export function Description(props: { id?: string; className: string; description: Nullable<StringOrCanvas> }) {
    const [description, setDescription] = useState<null | string>();

    useEffect(() => {
        let ignore = false;
        getDescriptionHtml(props.description).then(
            (c) => {
                if (!ignore) {
                    setDescription(c);
                }
            }
        );
        return () => {
            ignore = true;
        };
    }, [props.description]);

    return !!description
        ? (
            <div id={props.id} className={props.className} dangerouslySetInnerHTML={{ __html: description }}>
            </div>
        )
        : null;
}

async function getDescriptionHtml(description: Nullable<StringOrCanvas>) {
    if (!description) {
        return '';
    }
    if (typeof description === 'string') {
        // markdown
        const markdownRenderer = await createMarkdownRenderer();
        return markdownRenderer.render(description);
    }
    const htmlRenderer = await createSimpleRenderer();
    return htmlRenderer({ data: description });
}