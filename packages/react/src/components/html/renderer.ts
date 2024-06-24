import * as md from 'markdown-it';

declare module 'markdown-it' {}

const markdownRenderer = md.default() as { render: (markdown: string) => string };

function markdown(markdown: string) {
    return markdownRenderer.render(markdown);
}

export const Renderers = {
    markdown
};
