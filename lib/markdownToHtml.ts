import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(prism, {
      // Optional settings can be added here
      plugins: ['line-numbers'], // Example: add line numbers
    })
    .process(markdown);
  return result.toString();
}
