import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXTAUTH_URL ?? 'https://reaganstrategicsolutions.com'

  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/testimonials`, lastModified: new Date(), priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ]
}
