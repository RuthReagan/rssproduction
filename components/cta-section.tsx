'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import { Phone, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/oklahoma-landscape.jpg"
          alt="Oklahoma landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1B2D]/80" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <SectionReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#D4A574]/40" />
            <span className="text-[#D4A574] text-sm font-semibold tracking-[0.2em] uppercase">
              Let&apos;s Connect
            </span>
            <div className="h-px w-10 bg-[#D4A574]/40" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Partner with
            <br />
            <span className="text-[#D4A574]">Reagan Strategic Solutions</span>
          </h2>
          <p className="text-gray-100 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
            Your organization may be doing well. But if you want to be the best employer, one where
            employees tell their family and friends to work, one that has an overwhelming pipeline
            of applicants, then partner with Reagan Strategic Solutions. Schedule a free
            consultation and let us help you become the employer of choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded font-semibold hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20 group"
            >
              <Phone className="w-4 h-4" />
              Schedule Your FREE Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 group"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Free 30-minute call &bull; No obligation &bull; We respond within 1 business day
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
