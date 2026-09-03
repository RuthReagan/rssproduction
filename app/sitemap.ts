import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXTAUTH_URL ?? 'https://reaganstrategicsolutions.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/testimonials`, lastModified: new Date(), priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes]
}
