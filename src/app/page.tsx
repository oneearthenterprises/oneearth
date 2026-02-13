import Image from 'next/image';
import Link from 'next/link';
import {
  Home as HomeIcon,
  Lightbulb,
  Leaf,
  Server,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero');

function HeroSection() {
  return (
    <section id="overview" className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              One Earth Enterprises
            </h1>
            <p className="mt-6 text-lg text-foreground md:text-xl">
              Our mission is to foster growth and innovation across key sectors,
              creating sustainable value for our partners and communities. We
              envision a future where technology and enterprise drive positive
              global change.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="#verticals">
                  Explore Our Verticals <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const verticals = [
  {
    icon: Server,
    title: 'IT Services',
    description:
      'Delivering cutting-edge technology solutions, from cloud infrastructure to bespoke software development.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Building and scaling digital marketplaces that connect global consumers with premium products.',
  },
  {
    icon: HomeIcon,
    title: 'Real Estate',
    description:
      'Developing and managing innovative commercial and residential properties for a modern lifestyle.',
  },
];

function VerticalsSection() {
  return (
    <section id="verticals" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Business Verticals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Diversified expertise driving innovation across multiple industries.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {verticals.map((vertical, index) => (
            <Card
              key={vertical.title}
              className="flex animate-fade-in-up flex-col items-center p-6 text-center"
              style={
                { '--animation-delay': `${index * 200}ms` } as React.CSSProperties
              }
            >
              <CardHeader className="p-0">
                <div className="rounded-full bg-primary/10 p-4 text-primary">
                  <vertical.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="mt-4 p-0">
                <CardTitle className="text-xl">{vertical.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {vertical.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Forestgate',
      description: 'Sustainable residential development focused on green living and thoughtful planning.',
      imageId: 'project-forestgate',
    },
    {
      title: 'Ayubhava',
      description: 'A wellness-oriented project designed around nature, balance, and lifestyle.',
      imageId: 'project-ayubhava',
    },
    {
      title: 'Royal Infra',
      description: 'An infrastructure-focused brand delivering quality-driven real estate solutions.',
      imageId: 'project-royalinfra',
    },
  ];

  return (
    <section id="investments" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute right-6 top-6 z-10 scale-0 rounded-full bg-background/90 p-3 text-primary backdrop-blur-sm transition-all duration-300 group-hover:scale-100">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We are driven by a relentless pursuit of new ideas and creative solutions that challenge the status quo.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Integrity',
    description:
      'Our business is built on a foundation of transparency, ethical conduct, and unwavering trust.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We are committed to responsible practices that ensure a positive impact on the environment and society.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Vision',
    description:
      'We invest in the future, focusing on sustainable growth and lasting relationships over short-term gains.',
  },
];

function ValuesSection() {
  return (
    <section id="about" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why One Earth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our core values are the bedrock of our corporate identity and guide
            every decision we make.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="animate-fade-in-up flex flex-col items-start text-left"
              style={
                { '--animation-delay': `${index * 200}ms` } as React.CSSProperties
              }
            >
              <value.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeopleAndCareersSection() {
  return (
    <section id="people-careers" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            People &amp; Careers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our team and build the future with us.
          </p>
        </div>
      </div>
    </section>
  );
}

function NewsAndReportsSection() {
  return (
    <section id="news-reports" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            News &amp; Reports
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with our latest announcements and publications.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalsSection />
      <ProjectsSection />
      <ValuesSection />
      <PeopleAndCareersSection />
      <NewsAndReportsSection />
      <ContactSection />
    </>
  );
}
