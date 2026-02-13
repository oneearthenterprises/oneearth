import { type Metadata } from 'next';
import {
  Lightbulb,
  ShieldCheck,
  Leaf,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Core Values | One Earth Enterprises',
  description: 'Our core values are the bedrock of our corporate identity and guide every decision we make.',
};

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

export default function CoreValuesPage() {
  return (
    <div className="bg-white">
        <section className="bg-secondary py-16 sm:py-24">
            <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                    Our Core Values
                </h1>
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
                    <h3 className="text-xl font-semibold text-zinc-800">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
}
