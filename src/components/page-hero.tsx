
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HeroLink = {
  href: string;
  title: string;
};

type PageHeroProps = {
  title: string;
  bannerImageId: string;
  links: HeroLink[];
};

export function PageHero({ title, bannerImageId, links }: PageHeroProps) {
  const bannerImage = PlaceHolderImages.find((p) => p.id === bannerImageId);
  const contentId = `#${title.toLowerCase().replace(/ & /g, '-and-').replace(/\s+/g, '-')}-content`;

  return (
    <section id={`${title.toLowerCase()}-hero`} className="relative h-screen w-full">
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
        <h1 className="text-6xl font-bold md:text-8xl">{title}</h1>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <a
            href={contentId}
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light uppercase tracking-widest hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
