'use client'

import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import { Quote, ArrowRight, Award, HeartHandshake, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: '30+ Years of Experience',
    description:
      'Founder and CEO Ruth Reagan brings more than 30 years of executive Human Resources leadership experience, serving tribal governments and enterprises, hospitality organizations, banking, oil and gas, and multi-state employers.',
  },
  {
    icon: HeartHandshake,
    title: 'Built on Trusted Relationships',
    description:
      'Throughout her career, she has built trusted relationships with executives, managers, and employees by delivering practical solutions, leading through change, and helping organizations achieve lasting results.',
  },
  {
    icon: Sparkles,
    title: 'A Fresh Partnership',
    description:
      'We look forward to continuing to partner with organizations to help them strengthen their leadership, build unique cultures, engage employees, and build a fun and exceptional workplace.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Testimonials
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-5">
              Building New Partnerships. Earning Lasting Trust.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Although our consulting firm is new, the experience behind it is not. As we grow, we
              will highlight testimonials from our clients that have experienced our partnership.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="relative bg-[#FAFAF8] border border-gray-100 rounded-xl p-8 h-full flex flex-col group hover:shadow-lg hover:border-[#B8860B]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#0F1B2D] flex items-center justify-center mb-5 group-hover:bg-[#B8860B] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#D4A574] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#0F1B2D] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1">{item.description}</p>
                </div>
              </SectionReveal>
            )
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <Quote className="w-6 h-6 text-[#B8860B]/40" />
              <p className="font-serif text-xl md:text-2xl text-[#0F1B2D] italic">
                Your success could become our next testimonial.
              </p>
            </div>
            <div>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#A67C00] font-semibold transition-colors duration-300"
              >
                Learn About Partnering With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
