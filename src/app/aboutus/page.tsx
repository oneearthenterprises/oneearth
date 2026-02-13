
import { type Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'About | novo holdings',
  description:
    'Learn more about the vision, mission, and values of novo holdings.',
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
            About us in Brief
          </h2>
          <div className="mt-12 space-y-8 text-base text-foreground">
            <p>
              novo holdings was founded with a clear vision: to build
              businesses that are resilient, scalable, and designed for long-term
              impact. As a diversified parent company operating across IT
              services, e-commerce, and real estate, we bring together strategy,
              execution, and trust to create enterprises that are prepared for
              the future while grounded in strong fundamentals.
            </p>
            <p>
              From the beginning, our focus has been on building with
              intention. We believe that sustainable success is achieved not
              through short-term wins, but through disciplined execution,
              ethical governance, and a deep understanding of how businesses
              evolve over time.
            </p>
            <p>
              novo holdings serves as a holding and operating
              company, providing strategic direction, shared capabilities, and
              long-term oversight to the ventures within our ecosystem.
            </p>
            <p>
              Our presence in IT services is driven by a commitment to helping
              organizations navigate digital transformation with clarity and
              confidence. We focus on delivering practical, scalable technology
              solutions that support operational efficiency and long-term
              growth. By prioritizing reliability, security, and execution
              excellence, we aim to build technology-driven businesses and
              partnerships that can adapt to changing markets and emerging
              opportunities.
            </p>
            <p>
              In the e-commerce space, novo holdings focuses on
              building and supporting commerce-led ventures with strong
              operational foundations. We emphasize data-driven
              decision-making, customer-centric design, and scalable systems
              that enable consistent performance. Our approach goes beyond
              transactions, focusing instead on creating sustainable brands and
              platforms that can grow responsibly and endure market cycles.
            </p>
            <p>
              Our real estate activities are centered on creating long-term
              asset value through thoughtful development, strategic investment,
              and responsible management. We view real estate as a critical
              pillar in building stable, diversified enterprises—one that
              requires patience, quality execution, and a long-term
              perspective. By aligning location strategy, design, and asset
              management, we aim to create developments that deliver lasting
              value for stakeholders and communities alike.
            </p>
            <p>
              At the heart of novo holdings is a strong commitment
              to governance, transparency, and trust. We believe that a parent
              company’s responsibility extends beyond growth to include
              accountability, ethical leadership, and sustainable value
              creation. Our governance frameworks are designed to support
              disciplined capital allocation, risk management, and consistent
              performance across all business verticals.
            </p>
            <p>
              As we continue to expand, our vision remains rooted in building
              an integrated group of businesses that complement one another and
              contribute meaningfully to the broader economy. Guided by
              long-term thinking and a founder-led mindset, novo holdings
              seeks opportunities that align with our values and our
              strategic direction. Through innovation, execution, and trust, we
              are committed to building enterprises that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
