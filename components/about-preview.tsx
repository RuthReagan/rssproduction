'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionReveal } from './section-reveal'
import { ArrowRight, CheckCircle } from 'lucide-react'

const credentials = [
  'NNAHRA Leader of the Year, 2024',
  'MBA, Northeastern State University',
  'SPHR & SHRM-SCP Certified',
  'THRP, Tribal HR Professional',
  'TMP, Tribal Management Professional',
  'Featured Speaker at NNAHRA Annual Conferences, Native Nations Human Resources Conferences, OIGA & Many Others',
]

export function AboutPreview() {
  return (
    <section className="py-28 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <SectionReveal direction="left">
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B8860B]/10 to-transparent rounded-2xl" />
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ruth-regan.webp"
                    alt="Ruth Reagan, MBA - Founder of Reagan Strategic Solutions"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-5 -right-5 bg-[#0F1B2D] text-white px-6 py-5 rounded-xl shadow-xl">
                  <div className="font-display text-3xl font-bold text-[#D4A574]">30+</div>
                  <div className="text-xs font-medium mt-1 text-gray-300">Years of HR<br/>Excellence</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.15em] uppercase">
                  Meet the Founder
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-5">
                Ruth Reagan
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ruth Reagan is a proud citizen of the Cherokee Nation and has over 30 years of
                experience in strategic management, leadership development, executive coaching,
                talent strategies, change management, compensation management and employee
                relations. The last 10 years, Ruth held the position as Human Resources director
                for Muscogee Nation Gaming Enterprises (MNGE).
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unlike many consultants who advise from theory, Ruth has spent decades leading HR
                from inside the organization. In 2024, she was recognized as the National Native
                American Human Resources Association (NNAHRA) Leader of the Year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#0F1B2D]">{cred}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#B8860B] text-white rounded font-semibold text-sm hover:bg-[#9A7209] transition-all duration-200 group"
              >
                Schedule Your FREE Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
