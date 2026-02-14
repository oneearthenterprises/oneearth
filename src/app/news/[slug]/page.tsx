import { type Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';


import { newsArticles } from '@/lib/news-articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';






type NewsArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const article = newsArticles.find((p) => p.slug === params.slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | One Earth Enterprises`,
    description: article.excerpt,
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsArticles.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === article.imageId);

  return (
    <article className="bg-white">
      {image && (
        <header className="relative h-[60vh] w-full">
          <Image
            src={image.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white sm:p-12 lg:p-24">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Published on {article.date}
            </p>
          </div>
        </header>
      )}

      <div className="container mx-auto max-w-3xl py-16 px-4 text-lg sm:px-6 lg:py-24">
        <div
          className="text-foreground"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
