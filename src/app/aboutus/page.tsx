import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | One Earth Enterprises',
  description: 'Learn more about the vision, mission, and values of One Earth Enterprises.',
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl md:text-6xl">
          About One Earth Enterprises
        </h1>
        <div className="mt-12 space-y-8 text-lg text-zinc-600">
          <p>
            The One Earth Enterprises was founded with a clear vision: to build
            businesses that are resilient, scalable, and designed for long-term
            impact. As a diversified parent company operating across IT services,
            e-commerce, and real estate, we bring together strategy, execution,
            and trust to create enterprises that are prepared for the future while
            grounded in strong fundamentals.
          </p>
          <p>
            Our philosophy is rooted in the belief that sustainable growth is achieved
            by balancing economic success with social and environmental responsibility.
            We invest in ventures that not only promise financial returns but also
            contribute positively to the communities they serve.
          </p>
          <div>
            <h2 className="mt-12 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">Our Mission</h2>
            <p className="mt-4">
              To create and nurture a portfolio of businesses that are leaders in their respective
              industries, known for their innovation, integrity, and commitment to excellence. We aim
              to build a legacy of value for our stakeholders, employees, and society at large.
            </p>
          </div>
          <div>
            <h2 className="mt-12 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">Our Vision</h2>
            <p className="mt-4">
              To be a globally recognized enterprise that champions sustainable development and
              long-term value creation. We envision a future where business success is synonymous
              with positive global impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
