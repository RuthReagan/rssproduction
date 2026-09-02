'use client'

import { SectionReveal } from './section-reveal'

const audiences = [
  'Tribal Governments',
  'Tribal Enterprises',
  'Private Businesses',
  'Nonprofits',
  'Multi-Site Operations',
  'Federal Contractors',
]

export function WhoWeServe() {
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Who We Serve
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6 leading-[1.15]">
              HR Leadership for Every Organization
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              While we proudly serve all organizations of all sizes and industry, our passion and
              expertise are in partnering with tribal governments and their enterprises — from administration and health to hospitality and gaming.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-5">
              We proudly partner with private businesses, nonprofits, and other organizations seeking
              executive level HR leadership and transformational organizational consulting.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {audiences.map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#0F1B2D] shadow-sm hover:border-[#B8860B]/40 transition-colors duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
