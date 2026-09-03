import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogIndexContent } from './_components/blog-index-content'
import { getAllArticleSummaries, getAllCategories } from '@/lib/blog'

// Force this route to be statically generated at build time, independent of
// the root layout's dynamic rendering, since the content never changes at
// request time and static HTML is best for SEO and load speed.
export const dynamic = 'force-static'

export const metadata = {
  title: 'HR Insights & Resources',
  description:
    'Practical HR guidance on compliance, culture, tribal gaming, leadership, and workforce strategy from Reagan Strategic Solutions.',
}

export default function BlogPage() {
  const articles = getAllArticleSummaries()
  const categories = getAllCategories()

  return (
    <main className="min-h-screen">
      <Header />
      <BlogIndexContent articles={articles} categories={categories} />
      <Footer />
    </main>
  )
}
