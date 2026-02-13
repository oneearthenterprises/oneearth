
import { type Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'News | novo holdings',
  description: 'Latest news and announcements from novo holdings.',
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
          <div className="mt-12 text-base text-foreground">
            <p>Check back soon for the latest news and updates.</p>
          </div>
        </div>
      </div>
    </>
  );
}
