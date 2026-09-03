import blogData from './blog-data.json'

export interface Faq {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  category: string
  keyword: string
  readTime: number
  metaDescription: string
  intro: string
  body: string
  faqs: Faq[]
  publishedAt: string
}

export type ArticleSummary = Omit<Article, 'body' | 'faqs'>

const articles = blogData as Article[]

/**
 * All articles, sorted alphabetically by title. This data is bundled at
 * build time from lib/blog-data.json (generated from seo-articles/markdown),
 * so there is no database or runtime file-system read involved.
 */
export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => a.title.localeCompare(b.title))
}

/** Lightweight list for the index/search page (no body/faqs payload). */
export function getAllArticleSummaries(): ArticleSummary[] {
  return getAllArticles().map(({ body, faqs, ...rest }) => rest)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(articles.map((a) => a.category))).sort()
}

export function getRelatedArticles(slug: string, limit = 3): ArticleSummary[] {
  const current = getArticleBySlug(slug)
  if (!current) return []
  return getAllArticleSummaries()
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, limit)
}

/* ---------------------------------------------------------------------- */
/* Minimal markdown -> content-block parser.                              */
/* The article corpus only uses #, ##, ### headings, italic-wrapped       */
/* lede lines, and plain paragraphs, so a small line-based parser is all  */
/* that's needed (no external markdown renderer dependency required).    */
/* ---------------------------------------------------------------------- */

export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }

export function parseArticleBody(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = []
  const paragraphs = body.split(/\n\s*\n/)

  for (const raw of paragraphs) {
    const line = raw.trim()
    if (!line) continue

    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.replace(/^###\s+/, '') })
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.replace(/^##\s+/, '') })
    } else if (line.startsWith('# ')) {
      // Skip stray top-level headings inside the body (title is rendered separately)
      continue
    } else {
      blocks.push({ type: 'p', text: line.replace(/\n/g, ' ') })
    }
  }

  return blocks
}

export function estimateReadTimeLabel(minutes: number): string {
  return `${minutes} min read`
}
