
import { type Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'People & Careers | novo holdings',
  description: 'Join the team at novo holdings.',
};

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
