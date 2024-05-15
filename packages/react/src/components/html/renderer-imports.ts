import { createRenderer } from '@contensis/canvas-html';
import { Liquid } from 'liquidjs';
import * as md from 'markdown-it';

declare module 'markdown-it' {
    
}

export function createSimpleRenderer() {
    return createRenderer();
}

function liquidCode(props: any) {
    const language = props.block?.value?.language;
    const code = props.block?.value?.code;
    return (language === 'liquid')
        ? code
        : '';
}

export function createConfirmationRenderer() {
    return createRenderer({
        blocks: {
            _code: liquidCode
        }
    });
}

export function createLiquidRenderer() {
    return new Liquid();
}

export function createMarkdownRenderer(): Promise<{ render: (markdown: string) => string }> {
    return md.default();
}
