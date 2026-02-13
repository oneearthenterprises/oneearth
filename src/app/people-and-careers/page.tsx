import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'People & Careers | novo holdings',
  description: 'Join the team at novo holdings.',
};

function PeopleHero() {
  const bannerImage = PlaceHolderImages.find(
    (p) => p.id === 'people-careers-banner'
  );
  return (
    <section id="people-hero" className="relative h-screen w-full">
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
        <h1 className="text-6xl font-bold md:text-8xl">People & Careers</h1>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <a
            href="#people-content"
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
              href="/news"
              className="text-sm font-light uppercase tracking-widest hover:underline"
            >
              News
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-light uppercase tracking-widest hover:underline"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PeopleAndCareersPage() {
  return (
    <>
      <PeopleHero />
      <div id="people-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Join Our Team
          </h2>
          <div className="mt-12 space-y-4 text-base text-foreground">
            <p>
              At novo holdings, we are building a team of passionate,
              driven individuals who are committed to our long-term vision. We
              believe that our people are our greatest asset, and we provide an
              environment where talent can thrive.
            </p>
            <p>
              We seek out individuals who are aligned with our core values of
              integrity, excellence, and stewardship. If you are looking to be
              part of a dynamic, forward-thinking organization, we invite you
              to explore career opportunities with us.
            </p>
            <p className="mt-8">
              Information about open positions will be available here soon.
              Please check back for updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
