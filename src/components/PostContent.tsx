import { format } from 'date-fns';
import { Post } from '@/lib/posts';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <article>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600">
          <time dateTime={post.date} className="text-lg">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </div>
      </header>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-pink-600 prose-pre:bg-gray-100 prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
