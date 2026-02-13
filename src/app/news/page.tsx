import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | One Earth Enterprises',
  description: 'Latest news and announcements from One Earth Enterprises.',
};

export default function NewsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl md:text-6xl">
          News
        </h1>
        <div className="mt-12 text-lg text-zinc-800">
          <p>Check back soon for the latest news and updates.</p>
        </div>
      </div>
    </div>
  );
}
