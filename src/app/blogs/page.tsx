import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | One Earth Enterprises',
  description: 'Insights and articles from the team at One Earth Enterprises.',
};

export default function BlogsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl md:text-6xl">
          Blogs
        </h1>
        <div className="mt-12 text-lg text-zinc-800">
          <p>Our blog is coming soon. Stay tuned for insights and articles.</p>
        </div>
      </div>
    </div>
  );
}
