'use client'

import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import {
  ArrowRight, Landmark, Users, Gavel, Building2,
  Layers, HeartHandshake, Scale, UserCog
} from 'lucide-react'

const differentiators = [
  { icon: Landmark, label: 'Sovereignty' },
  { icon: Users, label: 'Indian Preference' },
  { icon: Gavel, label: 'Gaming Regulations' },
  { icon: Building2, label: 'Hospitality Operations' },
  { icon: Layers, label: 'Multiple Enterprises' },
  { icon: HeartHandshake, label: 'Community Impact' },
  { icon: Scale, label: 'Political Dynamics' },
  { icon: UserCog, label: 'Executive Transitions' },
]

export function TribalExpertiseSection() {
  return (
    <section className="relative py-28 bg-[#0F1B2D] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#D4A574] text-sm font-semibold tracking-[0.2em] uppercase">
                Built for Indian Country
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
              Tribal Organizations Deserve Specialized HR Expertise
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Tribal governments and their enterprises operate in an environment unlike any
              other. Few consultants truly understand how these pieces work together. Reagan
              Strategic Solutions was built to help leaders and human resources teams understand and
              navigate all of these differences in Indian country. Our experience within tribal
              enterprises provides knowledge, expertise, and solutions that no other consulting
              group can provide.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {differentiators.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center hover:bg-white/[0.07] hover:border-[#B8860B]/30 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-lg bg-[#B8860B]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#D4A574]" />
                </div>
                <p className="font-display font-semibold text-white text-sm">{item.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-400 leading-relaxed mb-8">
              That perspective allows us to provide recommendations that are practical, culturally
              respectful, legal, and aligned with each nation&apos;s mission and values. When tribal
              businesses are successful, the impact reaches beyond their team members. Strong
              organizations create increased revenue which creates stronger communities by
              supporting healthcare, housing, education, elder services, scholarships, and
              infrastructure. Although tribal organizations remain our primary focus, we proudly
              partner with private businesses, nonprofits, and other organizations seeking
              executive-level HR leadership and transformational organizational consulting.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#B8860B] text-white rounded font-semibold text-sm hover:bg-[#9A7209] transition-all duration-200 group shadow-lg shadow-[#B8860B]/20"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
    </section>
  )
}
