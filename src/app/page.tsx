
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';

function HeroSection() {
  return (
    <section id="overview" className="w-full bg-white pt-24 pb-12">
      <div className="container mx-auto py-12 px-4 text-left sm:px-6 lg:px-8">
        <h1 className="text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Investing to benefit people and the planet
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl" style={{color: '#27272a', fontSize: '16px'}}>
          The holding and investment company of the Novo Nordisk Foundation
        </p>
      </div>
      <div className="w-full">
        <video
          className="mx-auto h-[600px] w-[95%] rounded-[20px] object-cover object-top"
          src="/assets/videos/herosectionbanner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 gap-y-8 px-4 md:grid-cols-3 md:gap-x-16 lg:px-8">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What We Do
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            Building Businesses That Last
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground" style={{color: '#27272a', fontSize: '16px'}}>
            At The One Earth Enterprises, we bring together technology, commerce,
            and infrastructure to build businesses that last. Guided by innovation
            and grounded execution, we focus on creating long-term value for
            partners, clients, and communities.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutUsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Aspiration
          </h2>
          <p
            className="mt-4 font-thin text-foreground"
            style={{
              fontSize: 'clamp(2.5rem, 5vw + 1rem, 5rem)',
              lineHeight: 1.175,
              color: '#27272a',
              fontWeight: 100,
            }}
          >
            Our aspiration is to build and scale businesses that deliver consistent performance, long-term growth, and enduring stakeholder confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Intgelico',
      description: 'Sustainable residential development focused on green living and thoughtful planning.',
      imageId: 'project-intgelico',
      tags: ['Sustainable', 'Green Living', 'Residential'],
    },
    {
      title: 'Ayubhava',
      description: 'A wellness-oriented project designed around nature, balance, and lifestyle.',
      imageId: 'project-ayubhava',
      tags: ['Wellness', 'Nature', 'Lifestyle'],
    },
    {
      title: 'Royal Infra',
      description: 'An infrastructure-focused brand delivering quality-driven real estate solutions.',
      imageId: 'project-royalinfra',
      tags: ['Infrastructure', 'Quality', 'Real Estate'],
    },
    {
      title: 'Global Roots',
      description: 'Connecting communities through globally-inspired and locally-rooted projects.',
      imageId: 'project-globalroots',
      tags: ['Community', 'Global', 'Local'],
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-foreground" style={{color: '#27272a', fontSize: '16px'}}>
            Building communities and infrastructure for a better tomorrow.
          </p>
        </div>
        <div className="mt-12 flex h-[60vh] w-full flex-col gap-4 md:flex-row">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((p) => p.id === project.imageId);
            return (
              <div
                key={project.title}
                className="group relative flex-1 cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out hover:flex-[3]"
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                <div className="absolute right-6 top-6 z-10 scale-0 rounded-full bg-background/90 p-3 text-primary backdrop-blur-sm transition-all duration-300 group-hover:scale-100">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:text-3xl group-hover:font-extrabold">{project.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FoundersNoteSection() {
  const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');

  return (
    <section id="founders-note" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                fill
                className="object-cover"
                data-ai-hint={founderImage.imageHint}
              />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Founder’s Note
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-foreground" style={{color: '#27272a', fontSize: '16px'}}>
              The idea behind The One Earth Enterprises began with a personal conviction—that enduring businesses are built with patience, clarity, and responsibility. From the very beginning, our intent was not to create a collection of short-term ventures, but to establish a platform capable of building and supporting businesses that can grow steadily, adapt to change, and stand the test of time.
            </p>
            <div className="mt-8">
              <Link href="/founders-note" className="inline-flex items-center text-lg font-medium text-primary group hover:text-primary/80">
                Read more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <AboutUsSection />
      <ProjectsSection />
      <FoundersNoteSection />
    </>
  );
}
