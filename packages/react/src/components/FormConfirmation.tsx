import { useEffect, useState } from 'react';
import { FormConfirmationProps } from '../models';
import { Rules, localisations } from '../state';
import { createConfirmationRenderer, createLiquidRenderer } from './html';

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
    if (Rules.isConfirmationRuleReturnContent(rule?.return)) {
        try {
            const liquidRenderer = await createLiquidRenderer();
            // render canvas to html then execute liquid
            const htmlRenderer = await createConfirmationRenderer();
            const content = rule.return.content;
            const htmlTemplate = htmlRenderer({ data: content });
            const html: string = await liquidRenderer.parseAndRender(htmlTemplate, formResponse || {});
            return html;
        } catch {
            return null;
        }
    } else {
        return null;
    }
}