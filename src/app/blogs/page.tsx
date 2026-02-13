
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Blogs | novo holdings',
  description: 'Insights and articles from the team at novo holdings.',
};

export default function BlogsPage() {
  const pageLinks = [
    { href: '/aboutus', title: 'About' },
    { href: '/news', title: 'News' },
    { href: '/people-and-careers', title: 'People & Careers' },
  ];

  return (
    <>
      <PageHero
        title="Blogs"
        bannerImageId="blogs-banner"
        links={pageLinks}
      />
      <div id="blogs-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Insights and Articles
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const image = PlaceHolderImages.find((p) => p.id === post.imageId);
              return (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                    <div className="relative h-56 w-full">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold group-hover:text-primary">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        By {post.author} on {post.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
