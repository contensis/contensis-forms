import { createContext } from 'react';
import { FormLocalizations } from './models';

export type FormRenderProps = {
    headingLevel: number;
    localizations: FormLocalizations
};

const DEFAULT_RENDER_PROPS: FormRenderProps = {
    headingLevel: 3,
    localizations: {}
};

export const FormRenderContext = createContext(DEFAULT_RENDER_PROPS);

export type PartialFormRenderProps = {
    headingLevel?: number;
    localizations?: Partial<FormLocalizations>
};

export function mergeRenderProps(props: PartialFormRenderProps): FormRenderProps {
    let result = DEFAULT_RENDER_PROPS;
    if (props?.headingLevel) {
        result = {
            ...result,
            headingLevel: props.headingLevel
        };
    }
    if (props.localizations) {
        result = {
            ...result,
            localizations: {
                ...result.localizations,
                ...props.localizations
            }
        };
    }
    return result;
}