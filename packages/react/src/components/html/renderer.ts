import { createRenderer } from '@contensis/canvas-html';
import * as md from 'markdown-it';

declare module 'markdown-it' {

}

// todo: we should be able to get rid of this when html is returned
const canvas = createRenderer();

const markdownRenderer = md.default() as { render: (markdown: string) => string };

function markdown(markdown: string) {
    return markdownRenderer.render(markdown);
}

export const Renderers = {
    canvas,
    markdown
};
