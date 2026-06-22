import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import { newsArticles } from '@/lib/news-articles'

// Ensure this metadata route is treated as static when using `output: "export"`.
// See: https://nextjs.org/docs/advanced-features/static-html-export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.theoneearthenterprises.com'

  const baseRoutes = [
    '',
    '/aboutus',
    '/contact',
    '/blogs',
    '/news',
    '/core-values',
    '/founders-note',
    '/people-and-careers',
  ]

  const blogRoutes = blogPosts.map((post) => `/blogs/${post.slug}`)
  const newsRoutes = newsArticles.map((article) => `/news/${article.slug}`)

  const routes = [...baseRoutes, ...blogRoutes, ...newsRoutes]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority:
      route === ''
        ? 1
        : route.startsWith('/blogs/') || route.startsWith('/news/')
        ? 0.6
        : 0.8,
  }))
}