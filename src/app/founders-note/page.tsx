import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership | One Earth Enterprises",
  description: "A message from the founder of One Earth Enterprises.",
};

export default function FoundersNotePage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
          
          {/* LEFT: STICKY IMAGE */}
          <div className="md:col-span-1">
  <div className="sticky top-[96px]">
    <div className="relative h-[calc(100vh-96px)] w-full overflow-hidden rounded-lg">
      <Image
        src="/assets/images/founders.png"
        alt="A portrait of the company founder."
        fill
        priority
        className="object-cover"
      />
    </div>
  </div>
</div>


          {/* RIGHT: SCROLL CONTENT */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Leadership
            </h1>

            <div className="mt-12 space-y-6 text-base text-foreground">
              <p className="text-2xl font-light italic text-muted-foreground">
                "The idea behind One Earth Enterprises began with a personal
                conviction—that enduring businesses are built with patience,
                clarity, and responsibility."
              </p>
            </div>

            <div className="mt-12 space-y-8 text-base text-foreground">
              <p>
                From the very beginning, our intent was not to create a collection
                of short-term ventures, but to establish a platform capable of
                building and supporting businesses that can grow steadily, adapt
                to change, and stand the test of time.
              </p>

              <p>
                Throughout our journey as a founder, we have seen how true value
                is created when strategy and execution move together. Whether in
                IT services, e-commerce, or real estate, our focus has always been
                on fundamentals: understanding markets deeply, allocating
                capital thoughtfully, and building teams and systems that can
                scale responsibly.
              </p>

              <p>
                We view the role of One Earth Enterprises as both a steward and a
                catalyst. As stewards, we provide governance, oversight, and
                long-term direction. As catalysts, we enable innovation,
                operational excellence, and disciplined growth.
              </p>

              <p>
                Trust and transparency are central to how we engage with
                investors, partners, and stakeholders. We believe credibility is
                earned through consistent performance, ethical leadership, and
                clear communication.
              </p>

              <p>
                As we continue to expand One Earth Enterprises, our long-term
                vision remains clear: to build future-ready enterprises with
                purpose, resilience, and integrity.
              </p>

              <p>
                We invite investors, partners, and the wider community to engage
                with us as we continue this journey.
              </p>

              <p className="mt-8 font-semibold">
                — Founders, One Earth Enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
