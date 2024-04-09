import { useEffect, useState } from 'react';
import { Nullable, StringOrCanvas } from '../models';
import { useFormSelector } from './FormContext';
import { createMarkdownRenderer, createSimpleRenderer } from './html';

export function FormCurrentPageDescription() {
    const [description, setDescription] = useState<null | string>();
    const currentPage = useFormSelector(f => f.selectCurrentPage);
    
    useEffect(() => {
        let ignore = false;
        getDescriptionHtml(currentPage.description).then(
            (c) => {
                if (!ignore) {
                    setDescription(c);
                }
            }
        );
        return () => {
            ignore = true;
        };
    }, [currentPage.description]);

    return !!description
        ? (
            <div className="form-current-page-description" dangerouslySetInnerHTML={{ __html: description }}>
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