import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People & Careers | novo holdings',
  description: 'Join the team at novo holdings.',
};

export default function PeopleAndCareersPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          People & Careers
        </h1>
        <div className="mt-12 text-base text-foreground">
          <p>Information about careers at novo holdings is coming soon.</p>
        </div>
      </div>
    </div>
  );
}
