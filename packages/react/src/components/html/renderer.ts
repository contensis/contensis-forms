
export async function createSimpleRenderer() {
    const { createSimpleRenderer } = await import('./renderer-imports');
    return createSimpleRenderer();
}

export async function createConfirmationRenderer() {
    const { createConfirmationRenderer } = await import('./renderer-imports');
    return createConfirmationRenderer();
}

export async function createLiquidRenderer() {
    const { createLiquidRenderer } = await import('./renderer-imports');
    return createLiquidRenderer();
}

export async function createMarkdownRenderer(): Promise<{ render: (markdown: string) => string }> {
    const { createMarkdownRenderer } = await import('./renderer-imports');
    return createMarkdownRenderer();
}
