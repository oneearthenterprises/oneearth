import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'News | novo holdings',
  description: 'Latest news and announcements from novo holdings.',
};

function NewsHero() {
  const bannerImage = PlaceHolderImages.find((p) => p.id === 'news-banner');
  return (
    <section id="news-hero" className="relative h-screen w-full">
      {bannerImage && (
        <Image
          src={bannerImage.imageUrl}
          alt={bannerImage.description}
          fill
          className="object-cover"
          data-ai-hint={bannerImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white sm:p-12 lg:p-24">
        <h1 className="text-6xl font-bold md:text-8xl">News</h1>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <a
            href="#news-content"
            className="group flex items-center gap-2 text-sm font-light uppercase tracking-widest"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <span>Scroll to learn more</span>
          </a>
          <div className="flex gap-6">
            <Link
              href="/aboutus"
              className="text-sm font-light uppercase tracking-widest hover:underline"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-light uppercase tracking-widest hover:underline"
            >
              Blogs
            </Link>
            <Link
              href="/people-and-careers"
              className="text-sm font-light uppercase tracking-widest hover:underline"
            >
              People & Careers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <div id="news-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Latest Updates
          </h2>
          <div className="mt-12 text-base text-foreground">
            <p>Check back soon for the latest news and updates.</p>
          </div>
        </div>
      </div>
    </>
  );
}
