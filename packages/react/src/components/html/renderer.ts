
export async function createSimpleRenderer() {
    const { createRenderer } = await import('@contensis/canvas-html');
    return createRenderer();
}

function liquidCode(props: any) {
    const language = props.block?.value?.language;
    const code = props.block?.value?.code;
    return (language === 'liquid')
        ? code
        : '';
}

export async function createConfirmationRenderer() {
    const { createRenderer } = await import('@contensis/canvas-html');
    return createRenderer({
        blocks: {
            _code: liquidCode
        }
    });
}

export async function createLiquidRenderer() {
    const { Liquid } = await import('liquidjs');
    return new Liquid();
}

export async function createMarkdownRenderer(): Promise<{ render: (markdown: string) => string }> {
    const md = await import('markdown-it');
    return md.default();
}

