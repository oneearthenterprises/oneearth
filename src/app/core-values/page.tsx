import { type Metadata } from 'next';
import {
  TrendingUp,
  Leaf,
  Server,
  ShoppingCart,
  Home,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About The One Earth Enterprises | One Earth Enterprises',
  description:
    'Learn about our long-term vision for building future-ready businesses.',
};

const sections = [
  {
    icon: TrendingUp,
    title: 'Building Future-Ready Businesses with a Long-Term Vision',
    content:
      'The One Earth Enterprises was founded with a clear vision: to build businesses that are resilient, scalable, and designed for long-term impact. As a diversified parent company operating across IT services, e-commerce, and real estate, we bring together strategy, execution, and trust to create enterprises that are prepared for the future while grounded in strong fundamentals.',
  },
  {
    icon: Leaf,
    title: 'A Founder-Led Approach to Sustainable Growth',
    content:
      'From the beginning, our focus has been on building with intention. We believe that sustainable success is achieved not through short-term wins, but through disciplined execution, ethical governance, and a deep understanding of how businesses evolve over time. The One Earth Enterprises serves as a holding and operating company, providing strategic direction, shared capabilities, and long-term oversight to the ventures within our ecosystem.',
  },
  {
    icon: Server,
    title: 'Technology and IT Services That Enable Transformation',
    content:
      'Our presence in IT services is driven by a commitment to helping organizations navigate digital transformation with clarity and confidence. We focus on delivering practical, scalable technology solutions that support operational efficiency and long-term growth. By prioritizing reliability, security, and execution excellence, we aim to build technology-driven businesses and partnerships that can adapt to changing markets.',
  },
  {
    icon: ShoppingCart,
    title: 'Building Scalable and Sustainable E-commerce Ventures',
    content:
      'In the e-commerce space, The One Earth Enterprises focuses on building and supporting commerce-led ventures with strong operational foundations. We emphasize data-driven decision-making, customer-centric design, and scalable systems that enable consistent performance, with a long-term focus on brand value and sustainability.',
  },
  {
    icon: Home,
    title: 'Creating Long-Term Value Through Real Estate',
    content:
      'Our real estate activities are centered on creating long-term asset value through thoughtful development, strategic investment, and responsible management. We view real estate as a critical pillar in building stable, diversified enterprises—one that requires patience, quality execution, and long-term thinking.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance, Trust, and Responsible Leadership',
    content:
      'At the heart of The One Earth Enterprises is a strong commitment to governance, transparency, and trust. We believe that a parent company’s responsibility extends beyond growth to include accountability, ethical leadership, and sustainable value creation. Our governance frameworks support disciplined capital allocation and risk management across all verticals.',
  },
  {
    icon: Building,
    title: 'An Integrated Enterprise Built for the Future',
    content:
      'As we continue to expand, our vision remains rooted in building an integrated group of businesses that complement one another and contribute meaningfully to the broader economy. Guided by long-term thinking and a founder-led mindset, The One Earth Enterprises seeks opportunities aligned with our values, building enterprises designed to endure and grow responsibly.',
  },
];

export default function CoreValuesPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl md:text-6xl text-center mb-20">
          About The One Earth Enterprises
        </h1>
        <div className="space-y-16 text-lg">
          {sections.map((section) => (
            <div key={section.title} className="relative">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <section.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="pl-20">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-800">
                  {section.title}
                </h2>
                <p className="mt-4 text-zinc-800">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
