import { type Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { blogPosts } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';



type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | One Earth Enterprises`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === post.imageId);

  return (
    <article className="bg-white">
      {image && (
        <header className="relative h-[60vh] w-full">
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white sm:p-12 lg:p-24">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              By {post.author} on {post.date}
            </p>
          </div>
        </header>
      )}

      <div className="container mx-auto max-w-3xl py-16 px-4 text-lg sm:px-6 lg:py-24">
        <div
          className="text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
