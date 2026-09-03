import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleContent } from './_components/article-content'
import {
  getAllSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/blog'

// Statically generate every article page at build time (SSG), independent of
// the root layout's dynamic rendering default.
export const dynamic = 'force-static'

const SITE_URL = 'https://reaganstrategicsolutions.com'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  const url = `${SITE_URL}/blog/${article.slug}`

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: url },
    keywords: article.keyword,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug, 3)
  const url = `${SITE_URL}/blog/${article.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    articleSection: article.category,
    author: {
      '@type': 'Person',
      name: 'Ruth Reagan',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reagan Strategic Solutions',
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  const faqJsonLd =
    article.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <main className="min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ArticleContent article={article} related={related} />
      <Footer />
    </main>
  )
}
