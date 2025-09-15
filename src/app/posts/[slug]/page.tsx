import { notFound } from 'next/navigation';
import { getPostData, getAllPostSlugsFromDB } from '@/lib/posts';
import PostContent from '@/components/PostContent';
import Link from 'next/link';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugsFromDB();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <PostContent post={post} />
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
