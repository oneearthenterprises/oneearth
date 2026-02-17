
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';


function HeroSection() {
  return (
    <section id="overview" className="w-full bg-white md
    :pt-16 pt-10 pb-12">
      <div className="container mx-auto md:py-12 py-8 px-4 text-left sm:px-6 lg:px-8">
        <h1 className="text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl">
        Create. Amaze. Inspire.
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl" style={{color: '#27272a', fontSize: '16px'}}>
        The One Earth Enterprises builds value across IT, real estate, and e-commerce by engineering growth--driven, future-focused business ecosystems.
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
    <section className="bg-white py-10">
      <div className="container mx-auto grid  grid-cols-1 gap-y-8 px-4 md:grid-cols-[3fr_5fr] md:gap-x-16 lg:px-8">
        <div className="">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What We Do
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            Building Businesses That Last
          </h2>
        </div>
        <div className="">
          <p className="text-lg leading-relaxed text-foreground" style={{color: '#27272a', fontSize: '16px'}}>
            At One Earth Enterprises, we bring together technology, commerce,
            and infrastructure to build businesses that last. Guided by innovation
            and grounded execution, we focus on creating long-term value for
            partners, clients, and communities.
          </p>
        </div>
      </div>
    </section>
  );
}

function FoundersNoteSection() {
  return (
    <section id="founders-note" className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative h-screen w-full overflow-hidden rounded-lg">
            <Image
              src="/assets/images/founders.png"
              alt="A portrait of the company founder."
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Founder’s Note
            </h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-foreground" style={{color: '#27272a', fontSize: '16px'}}>
              The idea behind One Earth Enterprises began with a personal conviction—that enduring businesses are built with patience, clarity, and responsibility. From the very beginning, our intent was not to create a collection of short-term ventures, but to establish a platform capable of building and supporting businesses that can grow steadily, adapt to change, and stand the test of time.
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

function AspirationSection() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Aspiration
          </h2>
          <p
            className="mt-4 font-thin text-foreground"
            style={{
              fontSize: 'clamp(2.5rem, 5vw + 1rem, 4rem)',
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
      title: 'Intellico',
      description: 'Next-generation IT solutions driving digital transformation for businesses.',
      imageId: 'project-intgelico',
      tags: ['IT Services', 'Innovation', 'Technology'],
      href: 'https://intellicoit.com/',
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
    <section id="projects" className="pt-8 pb-16 sm:pb-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-foreground" style={{color: '#27272a', fontSize: '16px'}}>
            Building communities and infrastructure for a better tomorrow.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-col gap-4 md:h-[60vh] md:flex-row">
          {projects.map((project: any) => {
            const image = PlaceHolderImages.find((p) => p.id === project.imageId);
            
            const cardInner = (
              <>
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
                    {project.tags.map((tag: string) => (
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
              </>
            );

            if (project.href) {
              return (
                <Link
                  href={project.href}
                  key={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out md:h-auto md:flex-1 md:hover:flex-[3]"
                >
                  {cardInner}
                </Link>
              );
            }

            return (
              <div
                key={project.title}
                className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out md:h-auto md:flex-1 md:hover:flex-[3]"
              >
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GuidingPrinciplesSection() {
  const principles = [
    {
      title: 'Purpose-Led Values',
      subtitle: 'Performance guided by integrity',
      points: [
        'High performance with accountability and respect',
        'Leadership through example',
      ],
    },
    {
      title: 'Long-Term Strategy',
      subtitle: 'Focused on sustainable growth',
      points: [
        'Disciplined capital allocation',
        'Diversified investments across core sectors',
      ],
    },
    {
      title: 'Operational Excellence',
      subtitle: 'Built on strong foundations',
      points: [
        'Scalable systems and execution',
        'Talent development and governance',
      ],
    },
    {
      title: 'Trust & Stewardship',
      subtitle: 'Responsible and transparent leadership',
      points: [
        'Long-term partnerships',
        'Ethical governance and risk discipline',
      ],
    },
  ];

  return (
    <section id="principles" className="bg-white pt-8 pb-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Guiding Principles
            </h2>
          </div>
          <div className="grid grid-cols-1  gap-8">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3 className="font-semibold text-foreground text-lg">{principle.title}</h3>
                {principle.subtitle && <p className="mt-1 text-sm text-muted-foreground">{principle.subtitle}</p>}
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  {principle.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
      <ProjectsSection />
      <AspirationSection />
      <GuidingPrinciplesSection />
      <FoundersNoteSection />
     
     
     
    </>
  );
}
