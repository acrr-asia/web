import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';
import rehypeMermaid from 'rehype-mermaid';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { rehypeMermaidFigure } from './src/plugins/rehype-mermaid-figure.mjs';
import { rehypeFootnoteLabel } from './src/plugins/rehype-footnote-label.mjs';

const site = 'https://acrr.asia';

const mermaidOptions = {
  strategy: 'inline-svg',
  mermaidConfig: {
    theme: 'neutral',
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    flowchart: { nodeSpacing: 30, rankSpacing: 40, padding: 10, wrappingWidth: 180 },
    sequence: { wrap: true, width: 130, actorMargin: 30, boxMargin: 8, messageMargin: 30, noteMargin: 8 },
  },
  errorFallback: (_element, _diagram, error, file) => {
    throw new Error(`Mermaid diagram failed to render in ${file.path}: ${error}`);
  },
};

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', vi: 'vi' } } })],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkReadingTime],
      rehypePlugins: [
        rehypeKatex,
        [rehypeMermaid, mermaidOptions],
        rehypeMermaidFigure,
        rehypeFootnoteLabel,
      ],
    }),
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid', 'math'] },
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-default' } },
  },
});
