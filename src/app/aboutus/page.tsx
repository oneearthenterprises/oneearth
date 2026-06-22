
import { type Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'About Us | One Earth Enterprises | Multi-Sector Business Group',
  description:
    'One Earth Enterprises drives global growth across IT sectors, real estate, digital e-commerce, and premium Ayurvedic herbal infusion wellness.',
  alternates: {
    canonical: 'https://www.theoneearthenterprises.com/aboutus',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'About One Earth Enterprises',
    'business group',
    'IT solutions company',
    'real estate developer',
    'e-commerce platform',
    'Ayurvedic wellness brand',
    'multi-sector business',
    'company vision',
    'business philosophy',
  ],
};

export default function AboutUsPage() {
  const pageLinks = [
    { href: '/news', title: 'News' },
    { href: '/blogs', title: 'Blogs' },
    { href: '/people-and-careers', title: 'People & Careers' },
  ];

  return (
    <>
      <PageHero
        title="About"
        bannerImageId="about-us-banner"
        links={pageLinks}
      />
      <div id="about-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            About Us
          </h2>
          <div className="mt-12 space-y-8 text-base text-foreground">
            <p>
              One Earth Enterprises drives global growth across IT sectors,
              real estate, digital e-commerce, and premium Ayurvedic herbal
              infusion wellness. We are a multi-sector business group focused on
              building high-value, future-ready enterprises that create lasting
              impact.
            </p>
            <p>
              Our strategy is centered on disciplined investment, operational
              excellence, and strong governance. By combining digital innovation
              with real-world infrastructure and wellness brands, we create
              businesses that are resilient, scalable, and aligned with the
              evolving needs of the markets we serve.
            </p>
            <p>
              One Earth Enterprises provides strategic direction and focused
              support to our subsidiaries, helping them grow with clarity,
              purpose, and accountability. From IT services and e-commerce
              platforms to real estate development and wellness products, our
              portfolio is designed to deliver long-term value for customers,
              partners, and communities.
            </p>
            <p>
              We believe sustainable success is built on trust, transparency,
              and meaningful differentiation. Our governance framework and
              ethical operating practices ensure that every business in our
              ecosystem is positioned to grow responsibly while creating shared
              value across people and the planet.
            </p>
            <p>
              With a founder-led mindset and a commitment to ambitious execution,
              One Earth Enterprises is creating integrated businesses that advance
              global commerce, enhance wellbeing, and shape the future of modern
              enterprise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
