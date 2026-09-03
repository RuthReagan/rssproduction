import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { SectionReveal } from '@/components/section-reveal'
import { parseArticleBody, type Article, type ArticleSummary } from '@/lib/blog'

interface ArticleContentProps {
  article: Article
  related: ArticleSummary[]
}

export function ArticleContent({ article, related }: ArticleContentProps) {
  const blocks = parseArticleBody(article.body)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0F1B2D] py-20 overflow-hidden">
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
        <div className="relative max-w-[800px] mx-auto px-6">
          <SectionReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4A574] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>

            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[#D4A574] bg-white/10 rounded-full px-3 py-1 mb-5">
              {article.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </span>
              <span>&middot;</span>
              <span>Reagan Strategic Solutions</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionReveal>
            {article.intro && (
              <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#B8860B] pl-6 mb-10">
                {article.intro}
              </p>
            )}

            <div className="space-y-6">
              {blocks.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl font-bold text-[#0F1B2D] tracking-tight pt-6"
                    >
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === 'h3') {
                  return (
                    <h3
                      key={i}
                      className="font-display text-lg font-bold text-[#0F1B2D] pt-2"
                    >
                      {block.text}
                    </h3>
                  )
                }
                return (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {block.text}
                  </p>
                )
              })}
            </div>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal>
            <div className="mt-16 rounded-2xl bg-[#FAFAF8] border border-gray-100 p-8 text-center">
              <h3 className="font-display text-xl font-bold text-[#0F1B2D] mb-3">
                Facing this challenge in your organization?
              </h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Reagan Strategic Solutions brings 30 years of executive HR experience to
                organizations of every size, tribal enterprises included.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1a2c47] transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-20 bg-[#FAFAF8]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-[#0F1B2D] tracking-tight mb-8">
                Related Reading
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <SectionReveal key={r.slug} delay={i * 0.05}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#B8860B]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="inline-block w-fit text-xs font-semibold tracking-wide uppercase text-[#B8860B] bg-[#B8860B]/10 rounded-full px-3 py-1 mb-3">
                      {r.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#0F1B2D] leading-snug mb-2 group-hover:text-[#B8860B] transition-colors">
                      {r.title}
                    </h3>
                    <span className="mt-auto flex items-center gap-1 text-xs text-[#B8860B] font-semibold pt-3">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
