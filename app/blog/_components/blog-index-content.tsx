'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight, Clock, X } from 'lucide-react'
import { SectionReveal } from '@/components/section-reveal'
import type { ArticleSummary } from '@/lib/blog'

interface BlogIndexContentProps {
  articles: ArticleSummary[]
  categories: string[]
}

export function BlogIndexContent({ articles, categories }: BlogIndexContentProps) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return articles.filter((article) => {
      const matchesCategory = !activeCategory || article.category === activeCategory
      if (!matchesCategory) return false
      if (!q) return true

      const haystack = [
        article.title,
        article.category,
        article.keyword,
        article.metaDescription,
      ]
        .join(' ')
        .toLowerCase()

      return haystack.includes(q)
    })
  }, [articles, query, activeCategory])

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0F1B2D] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#D4A574] text-sm font-semibold tracking-[0.2em] uppercase">
                HR Insights
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Practical <span className="text-[#D4A574]">HR Guidance</span>, Not Buzzwords
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
              {articles.length} articles on compliance, culture, tribal gaming HR, and
              executive leadership, drawn from 30 years in the field.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, e.g. &ldquo;FMLA&rdquo; or &ldquo;turnover&rdquo;"
                className="w-full h-14 pl-12 pr-12 rounded-full bg-white/95 backdrop-blur-xl text-[#0F1B2D] placeholder:text-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition-all"
                aria-label="Search articles"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0F1B2D] transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Category filters + results */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === null
                    ? 'bg-[#0F1B2D] text-white border-[#0F1B2D]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#B8860B]/50'
                }`}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeCategory === category
                      ? 'bg-[#0F1B2D] text-white border-[#0F1B2D]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#B8860B]/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </SectionReveal>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No articles match &ldquo;{query}&rdquo;. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <SectionReveal key={article.slug} delay={Math.min(i * 0.03, 0.3)}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#B8860B]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="inline-block w-fit text-xs font-semibold tracking-wide uppercase text-[#B8860B] bg-[#B8860B]/10 rounded-full px-3 py-1 mb-4">
                      {article.category}
                    </span>
                    <h2 className="font-display text-lg font-bold text-[#0F1B2D] leading-snug mb-3 group-hover:text-[#B8860B] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {article.metaDescription}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime} min read
                      </span>
                      <span className="flex items-center gap-1 text-[#B8860B] font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
