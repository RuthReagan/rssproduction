'use client'

import { SectionReveal } from './section-reveal'
import { AnimatedCounter } from './animated-counter'

const stats = [
  { value: 30, suffix: '+', label: 'Years', description: 'Executive HR Experience' },
  { value: 7, suffix: '', label: 'Certifications', description: 'SPHR, SHRM-SCP, THRP, TMP & more' },
  { value: 4000, suffix: '+', label: 'Employees', description: 'Supported Across Organizations' },
  { value: 100, suffix: '%', label: 'Dedicated', description: 'To Building Stronger Workforces' },
]

export function StatsSection() {
  return (
    <section className="relative py-20 bg-[#0F1B2D]">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#D4A574] text-sm font-semibold mt-2 tracking-wide uppercase">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
    </section>
  )
}
