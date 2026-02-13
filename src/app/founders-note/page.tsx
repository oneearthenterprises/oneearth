import { type Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Founder’s Note | One Earth Enterprises',
  description: 'A message from the founder of One Earth Enterprises.',
};

export default function FoundersNotePage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Founder's Note
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/founders.png"
                alt="A portrait of the company founder."
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 text-base text-foreground md:col-span-2">
              <p className="text-2xl font-light italic text-muted-foreground">
                "The idea behind The One Earth Enterprises began with a personal conviction—that enduring businesses are built with patience, clarity, and responsibility."
              </p>
          </div>
        </div>

        <div className="mt-12 space-y-8 text-base text-foreground">
          <p>
            From the very beginning, our intent was not to create a collection of short-term ventures, but to establish a platform capable of building and supporting businesses that can grow steadily, adapt to change, and stand the test of time.
          </p>
          <p>
            Throughout our journey as a founder, we have seen how true value is created when strategy and execution move together. Whether in IT services, e-commerce, or real estate, our focus has always been on fundamentals: understanding markets deeply, allocating capital thoughtfully, and building teams and systems that can scale responsibly. These principles guide every decision we make as a parent company.
          </p>
          <p>
            We view the role of The One Earth Enterprises as both a steward and a catalyst. As stewards, we provide governance, oversight, and long-term direction to the businesses within our group. As catalysts, we enable innovation, operational excellence, and disciplined growth by empowering our teams while maintaining strong accountability. This balance is essential to creating enterprises that remain resilient across market cycles.
          </p>
          <p>
            Trust and transparency are central to how we engage with investors, partners, and stakeholders. We believe that credibility is earned over time through consistent performance, clear communication, and ethical leadership. Our approach to growth is measured and deliberate, prioritizing sustainable value creation over rapid expansion. For us, success is defined not only by financial performance, but by the strength and integrity of the businesses we build.
          </p>
          <p>
            As we continue to expand The One Earth Enterprises, our long-term vision remains clear: to create an integrated group of businesses that deliver lasting economic value and contribute positively to the ecosystems in which they operate. We remain committed to disciplined execution, responsible governance, and continuous improvement.
          </p>
          <p>
            We invite investors, partners, and the wider community to engage with us as we continue this journey—one focused on building future-ready enterprises with purpose, resilience, and integrity.
          </p>
          <p className="mt-8 font-semibold">
            — Founders, The One Earth Enterprises
          </p>
        </div>
      </div>
    </div>
  );
}
