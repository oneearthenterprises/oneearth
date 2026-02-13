
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { PageHero } from '@/components/page-hero';
import { newsArticles } from '@/lib/news-articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'News | One Earth Enterprises',
  description: 'Latest news and announcements from One Earth Enterprises.',
};

export default function NewsPage() {
  const pageLinks = [
    { href: '/aboutus', title: 'About' },
    { href: '/blogs', title: 'Blogs' },
    { href: '/people-and-careers', title: 'People & Careers' },
  ];
  return (
    <>
      <PageHero
        title="News"
        bannerImageId="news-banner"
        links={pageLinks}
      />
      <div id="news-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Latest Updates
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => {
              const image = PlaceHolderImages.find(
                (p) => p.id === article.imageId
              );
              return (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group relative block h-96 overflow-hidden rounded-lg shadow-lg"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />

                  <div className="relative flex h-full flex-col justify-between p-6 text-white">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <ArrowUpRight className="h-6 w-6 text-white/80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">{article.title}</h3>
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
