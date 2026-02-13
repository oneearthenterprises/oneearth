
import { type Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'People & Careers | One Earth Enterprises',
  description: 'Join the team at One Earth Enterprises.',
};

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.888.001 2.268.622 4.383 1.678 6.289l-1.12 4.092 4.209-1.1s.001.001 0 0z" />
  </svg>
);

export default function PeopleAndCareersPage() {
  const pageLinks = [
    { href: '/aboutus', title: 'About' },
    { href: '/news', title: 'News' },
    { href: '/blogs', title: 'Blogs' },
  ];

  return (
    <>
      <PageHero
        title="People & Careers"
        bannerImageId="people-careers-banner"
        links={pageLinks}
      />
      <div id="people-and-careers-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 overflow-hidden rounded-lg bg-secondary p-8 text-center shadow-lg md:grid-cols-2 md:p-12 md:text-left">
            <div className="md:order-2">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Become a Part of Our Vision
              </h2>
              <p className="mt-6 text-lg leading-8 text-secondary-foreground">
                At One Earth Enterprises, we are building a team of passionate, driven
                individuals who are committed to our long-term vision. We
                believe that our people are our greatest asset, and we provide
                an environment where talent can thrive. If you are aligned with
                our core values of integrity, excellence, and stewardship, we
                invite you to connect with us.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    Connect on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-80 w-full md:order-1 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                alt="Team collaborating in a modern office"
                fill
                className="rounded-md object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
