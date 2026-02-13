import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Founder’s Note | One Earth Enterprises',
  description: 'A message from the founder of One Earth Enterprises.',
};

export default function FoundersNotePage() {
  const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl md:text-6xl">
          Founder's Note
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
             {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={founderImage.imageHint}
                />
              )}
            </div>
          </div>
          <div className="space-y-6 text-lg text-zinc-800 md:col-span-2">
              <p className="text-2xl font-light italic text-zinc-700">
                "The idea behind The One Earth Enterprises began with a personal conviction—that enduring businesses are built with patience, clarity, and responsibility."
              </p>
          </div>
        </div>

        <div className="mt-12 space-y-8 text-lg text-zinc-800">
          <p>
            From the very beginning, our intent was not to create a collection of short-term ventures, but to establish a platform capable of building and supporting businesses that can grow steadily, adapt to change, and stand the test of time.
          </p>
          <p>
            In a world that often prioritizes speed over substance, we chose a different path. We believe in the power of deliberate, thoughtful execution. This means we take the time to understand the fundamentals of each market we enter, whether it’s the fast-paced world of technology, the dynamic e-commerce landscape, or the tangible, long-term value of real estate.
          </p>
          <p>
            Our approach is founder-led and principle-driven. We operate with a deep sense of accountability, not just to our balance sheet, but to our partners, our teams, and the communities we impact. Trust is the cornerstone of every relationship we build, and we earn it through transparency, integrity, and a consistent focus on delivering what we promise.
          </p>
          <p>
            Building for the long term also requires a commitment to sustainability—in our business models, our environmental footprint, and our corporate governance. We are not just building for today; we are laying the groundwork for enterprises that will thrive for generations to come.
          </p>
          <p>
            Thank you for your interest in One Earth Enterprises. We are excited about the journey ahead and invite you to join us as we continue to build a future grounded in lasting value.
          </p>
        </div>
      </div>
    </div>
  );
}
