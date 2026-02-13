
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { PageHero } from '@/components/page-hero';
import { blogPosts } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Blogs | novo holdings',
  description: 'Insights and articles from the team at novo holdings.',
};

export default function BlogsPage() {
  const pageLinks = [
    { href: '/aboutus', title: 'About' },
    { href: '/news', title: 'News' },
    { href: '/people-and-careers', title: 'People & Careers' },
  ];

  return (
    <>
      <PageHero
        title="Blogs"
        bannerImageId="blogs-banner"
        links={pageLinks}
      />
      <div id="blogs-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Insights and Articles
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const image = PlaceHolderImages.find((p) => p.id === post.imageId);
              return (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group relative block h-96 overflow-hidden rounded-lg shadow-lg"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="relative flex h-full flex-col justify-between p-6 text-white">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                        {post.author.split(',')[0]}
                      </p>
                      <ArrowUpRight className="h-6 w-6 text-white/80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">{post.title}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
