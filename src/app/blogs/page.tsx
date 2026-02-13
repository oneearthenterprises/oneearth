
import { type Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Blogs | novo holdings',
  description: 'Insights and articles from the team at novo holdings.',
};

export default function BlogsPage() {
  const pageLinks = [
    { href: '/aboutus', title: 'About' },
    { href: '/news', title: 'News' },
    { href: '/people-and-careers', title: 'People & Careers' },
  ];

  return (
    <>
      <PageHero
        title="Blogs"
        bannerImageId="blogs-banner"
        links={pageLinks}
      />
      <div id="blogs-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Insights and Articles
          </h2>
          <div className="mt-12 text-base text-foreground">
            <p>
              Our blog is coming soon. Stay tuned for insights and articles from
              the team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
