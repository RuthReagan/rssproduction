'use client'

import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import { ArrowRight, Search, Sparkles, Building2 } from 'lucide-react'

const offerings = [
  {
    icon: Search,
    label: 'Signature Assessment',
    title: 'HR Department Transformation Assessment',
    description: 'A comprehensive diagnostic of your HR operation, covering structure, morale, compliance, turnover, leadership, accountability, culture, and processes. You receive an executive report with a prioritized roadmap for transformation.',
    highlights: ['Executive Report & Recommendations', 'Compliance Gap Analysis', 'Culture & Morale Assessment', 'Prioritized Transformation Roadmap'],
    accent: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Sparkles,
    label: 'Signature Program',
    title: 'Culture & Accountability Reset',
    description: 'Purpose-built for organizations dealing with toxic culture, leadership distrust, siloed departments, or morale collapse. Ruth is uniquely positioned for this work. She rebuilds accountability without destroying trust.',
    highlights: ['Leadership Alignment Sessions', 'Employee Engagement Strategy', 'Accountability Framework Design', 'Mission & Values Implementation'],
    accent: 'from-amber-500/10 to-amber-600/5',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Building2,
    label: 'Niche Expertise',
    title: 'Tribal Enterprise HR Advisory',
    description: 'Very few consultants combine deep tribal-enterprise experience, multi-site operational scale, AND executive HR leadership. This means premium-level guidance built specifically for sovereign nations — across government, enterprises, and every department, including gaming and hospitality.',
    highlights: ['Tribal Employment Law Expertise', 'Gaming Commission Compliance', 'Multi-Property HR Strategy', 'Indian Preference Program Design'],
    accent: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
]

export function SignatureOfferings() {
  return (
    <section className="py-28 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Signature Offerings
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-5">
              High-Impact Solutions for Expensive Problems
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              The highest-value consulting comes from solving the problems that cost your
              organization the most. These are our flagship engagements.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-8">
          {offerings.map((offering, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className={`relative rounded-xl bg-white border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-xl transition-all duration-500 overflow-hidden group`}>
                {/* Subtle gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${offering.accent} group-hover:h-1.5 transition-all duration-300`} />
                
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg ${offering.iconBg} flex items-center justify-center`}>
                          <offering.icon className={`w-5 h-5 ${offering.iconColor}`} />
                        </div>
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400">
                          {offering.label}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-[#0F1B2D] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        {offering.description}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="bg-[#FAFAF8] rounded-lg p-6 space-y-3">
                        {offering.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                            <span className="text-sm font-medium text-[#0F1B2D]">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#B8860B] text-white rounded font-semibold text-sm hover:bg-[#9A7209] transition-all duration-200 group shadow-sm"
            >
              Schedule Your FREE Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
