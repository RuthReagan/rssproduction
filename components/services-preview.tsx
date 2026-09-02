'use client'

import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import {
  Crown, Heart, ShieldCheck, Rocket, Mic, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Crown,
    title: 'Executive HR Strategy',
    description: 'Step into your organization as a fractional or interim CHRO, providing executive-level HR leadership, strategic direction, and hands-on management when you need it most.',
  },
  {
    icon: Heart,
    title: 'Culture & Leadership',
    description: 'Building trust, engagement, culture of accountability and compassion into the workplace. Very critical when going through change or growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Risk',
    description: 'We conduct thorough reviews of Human Resources practices and policies to identify risks, increase consistency, and improve Human Resources as a whole.',
  },
  {
    icon: Rocket,
    title: 'Growth & Change',
    description: 'Communication strategies, new property openings, high-volume hiring strategy, M&A HR integration, reorganizations, HRIS and process improvements, and change management support.',
  },
  {
    icon: Mic,
    title: 'Training & Speaking',
    description: 'High-energy, results-driven training and keynote speaking for tribal governments, enterprises, and HR conferences.',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Our Expertise
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-5">
              Comprehensive HR Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether your organization needs a 30-year experienced advisor, an interim HR leader,
              or a trusted consultant for a single solution, Reagan Strategic Solutions fills in the
              gaps to your challenges, tailored to your business goals.
            </p>
          </div>
        </SectionReveal>

        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100 mb-px">
          {services.slice(0, 2).map((service, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="group bg-white p-8 h-full flex flex-col hover:bg-[#FAFAF8] transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B8860B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 rounded-lg bg-[#0F1B2D]/5 flex items-center justify-center mb-5 group-hover:bg-[#B8860B]/10 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-[#0F1B2D] group-hover:text-[#B8860B] transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0F1B2D] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
          {services.slice(2).map((service, i) => (
            <SectionReveal key={i + 2} delay={(i + 2) * 0.06}>
              <div className="group bg-white p-8 h-full flex flex-col hover:bg-[#FAFAF8] transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B8860B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 rounded-lg bg-[#0F1B2D]/5 flex items-center justify-center mb-5 group-hover:bg-[#B8860B]/10 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-[#0F1B2D] group-hover:text-[#B8860B] transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0F1B2D] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0F1B2D] text-white rounded font-semibold text-sm hover:bg-[#1a2d47] transition-all duration-200 group"
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
