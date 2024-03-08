import { useEffect, useState } from 'react';
import { FormConfirmationProps } from '../models';
import { isConfirmationRuleReturnContent, isConfirmationRuleReturnMessage, localisations } from '../state';
import { createConfirmationRenderer, createLiquidRenderer, createMarkdownRenderer } from './html';

export function FormConfirmation(props: FormConfirmationProps) {
    const [confirmation, setConfirmation] = useState<null | string>();

    useEffect(() => {
        let ignore = false;
        getConfirmationHtml(props).then(
            (c) => {
                if (!ignore) {
                    setConfirmation(c);
                }
            }
        );
        return () => {
            ignore = true;
        };
    }, [props.rule, props.formResponse]);

    return !!confirmation
        ? (
            <div className="form-confirmation-message" dangerouslySetInnerHTML={{ __html: confirmation }}>
            </div>
        )
        : (
            <div className="form-confirmation-message">
                {localisations.confirmationMessage}
            </div>
        )
}

async function getConfirmationHtml({ rule, formResponse }: FormConfirmationProps) {
    if (isConfirmationRuleReturnContent(rule?.return) || isConfirmationRuleReturnMessage(rule?.return)) {
        try {
            const liquidRenderer = await createLiquidRenderer();
            if (isConfirmationRuleReturnContent(rule?.return)) {
                // render canvas to html then execute liquid
                const htmlRenderer = await createConfirmationRenderer();
                const htmlTemplate = htmlRenderer({ data: rule.return.content });
                const html: string = await liquidRenderer.parseAndRender(htmlTemplate, formResponse || {});
                return html;
            } else {
                // execute liquid then render markdown 
                const markdown = await liquidRenderer.parseAndRender(rule.return.message, formResponse || {});
                const markdownRenderer = await createMarkdownRenderer();
                return markdownRenderer.render(markdown);
            }            
        } catch {
            return null;
        }
    } else {
        return null;
    }
}