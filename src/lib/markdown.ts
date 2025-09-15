import { remark } from 'remark';
import html from 'remark-html';

export async function processMarkdown(markdown: string): Promise<string> {
  const processedContent = await remark()
    .use(html)
    .process(markdown);
  
  return processedContent.toString();
}
