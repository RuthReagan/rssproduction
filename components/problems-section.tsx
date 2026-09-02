'use client'

import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import { ArrowRight } from 'lucide-react'

const problems = [
  'A leadership problem',
  'A culture problem',
  'An accountability problem',
  'A communication problem',
  'A turnover problem',
  'An employee engagement problem',
]

export function ProblemsSection() {
  return (
    <section className="py-28 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal direction="left">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  The Real Problem
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6 leading-tight">
                We Solve the HR Problems That Cost Organizations the Most
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Many organizations don&apos;t have HR problems. They have a leadership problem.
                A culture problem. An accountability problem. A communication problem. A turnover
                problem. An employee engagement problem.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Those challenges not only cost organizations through lost productivity but also can
                cost future growth, avoidable turnover, horrible guest experiences, legal risk, and
                inconsistent leadership.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Reagan Strategic Solutions, we help organizations identify those issues,
                understand gaps, and build sustainable solutions that continue providing results
                long after our engagement ends. We don&apos;t believe in short term fixes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We build organizations where team members understand their &ldquo;why,&rdquo;
                leaders understand how to lead, and employees understand the organization&apos;s
                mission and vision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0F1B2D] text-white rounded font-semibold text-sm hover:bg-[#1a2d47] transition-all duration-200 group"
              >
                Schedule Your FREE Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#B8860B]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="font-display text-2xl font-bold text-[#B8860B]/20 mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="font-display font-bold text-[#0F1B2D] text-base">{problem}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
