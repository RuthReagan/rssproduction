'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/section-reveal'

import { Logo } from '@/components/logo'
import {
  ArrowRight, Phone, Shield, Users, Building2,
  Layers, Scale, UserCog, CheckCircle,
  Award, BookOpen, Target, Heart, BadgeCheck,
  ChevronDown, AlertTriangle, TrendingDown, Clock, DollarSign,
  Briefcase, Rocket, RefreshCcw, Gauge,
} from 'lucide-react'

/* ────────── Pain Points (general employer) ────────── */
const painPoints = [
  {
    icon: Rocket,
    title: 'HR Can’t Keep Up With Your Growth',
    description:
      'You’ve scaled headcount fast, but your HR systems, policies, and processes were built for a smaller company. The cracks are starting to show.',
  },
  {
    icon: Briefcase,
    title: 'No Strategic HR Leader at the Table',
    description:
      'You have people handling payroll and paperwork — but no one setting HR strategy, advising leadership, or building the org for what’s next.',
  },
  {
    icon: RefreshCcw,
    title: 'Caught Between HR Directors',
    description:
      'A key HR leader left and the search is taking months. Critical decisions, investigations, and compliance obligations can’t just wait.',
  },
  {
    icon: Layers,
    title: 'Merger, Reorg, or Rapid Change',
    description:
      'Integrations, restructures, and leadership transitions put enormous strain on your people. Get them wrong and you lose your best talent.',
  },
  {
    icon: TrendingDown,
    title: 'Turnover Is Quietly Costing You',
    description:
      'Every departure means lost knowledge, recruiting costs, and overtime. If you can’t explain why people leave, you can’t fix it.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance Risk You Can’t See',
    description:
      'FLSA classification, handbooks, wage-and-hour, workplace investigations — the exposure is real, and it usually surfaces at the worst possible time.',
  },
]

/* ────────── Differentiators ────────── */
const differentiators = [
  { icon: UserCog, label: 'Fractional & Interim CHRO' },
  { icon: Gauge, label: 'HR Assessments & Turnarounds' },
  { icon: Users, label: 'Culture & Engagement' },
  { icon: Building2, label: 'Multi-Site Operations' },
  { icon: Shield, label: 'Compliance & Investigations' },
  { icon: Scale, label: 'Comp & Classification' },
  { icon: Briefcase, label: 'M&A & Reorg Support' },
  { icon: Target, label: 'Leadership Development' },
]

/* ────────── Services ────────── */
const services = [
  'Fractional & Interim CHRO / HR Director',
  'HR department assessments & restructuring',
  'Culture transformation & employee engagement',
  'Compliance audits & risk assessments',
  'Employee handbook development & policy modernization',
  'Customer service & team training programs',
  'Leadership development & executive coaching',
  'Compensation & classification reviews',
  'Succession planning & workforce strategy',
  'Workplace investigations & employee relations',
]

/* ────────── Credentials ────────── */
const credentials = [
  { icon: Award, label: 'MBA' },
  { icon: Shield, label: 'SPHR' },
  { icon: BookOpen, label: 'SHRM-SCP' },
  { icon: Target, label: 'THRP' },
  { icon: BadgeCheck, label: 'TMP' },
  { icon: Heart, label: 'Mental Health Ally' },
]

export function BusinessLandingContent() {
  return (
    <main className="min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-female-executive.jpg"
            alt="HR executive leading a strategy session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0f1a]/80 md:bg-transparent" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/90 via-[#0a0f1a]/80 to-[#0a0f1a]/50" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#B8860B] to-transparent z-10" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Logo variant="light" />
          </motion.div>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[#B8860B]" />
                <span className="text-[#D4A574] text-sm tracking-[0.2em] uppercase font-bold">
                  Executive HR, On Your Terms
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-6"
              style={{
                textShadow:
                  '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)',
              }}
            >
              Executive HR Leadership for{' '}
              <span className="text-[#D4A574]">Growing Organizations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/90 leading-relaxed mb-10 max-w-xl"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
            >
              Get the strategic HR leadership your organization needs — without the full-time
              executive salary. Reagan Strategic Solutions delivers fractional and interim CHRO
              expertise to companies, nonprofits, and enterprises navigating growth, transition,
              and change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded font-semibold text-base hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20 hover:shadow-xl hover:shadow-[#B8860B]/30"
              >
                <Phone className="w-5 h-5" />
                Schedule Your FREE Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ PAIN POINTS ═══════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  Sound Familiar?
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-5">
                The HR Challenges Growing Companies{' '}
                <span className="text-[#B8860B]">Hit Every Time</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you’re scaling fast, filling a leadership gap, or working through a
                major change, these are the moments when strong HR leadership makes the
                difference between thriving and just surviving.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-gray-100 p-7 hover:border-[#B8860B]/20 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#B8860B]/10 flex items-center justify-center mb-5">
                    <point.icon className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <h3 className="font-display font-bold text-[#0F1B2D] text-lg mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════ WHY REAGAN IS DIFFERENT ═══════════ */}
      <section className="relative py-24 bg-[#0F1B2D] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#D4A574] text-sm font-semibold tracking-[0.2em] uppercase">
                  Why Reagan Strategic Solutions
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
                A Real HR Executive —{' '}
                <span className="text-[#D4A574]">Not Just Another Consultant</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Ruth Reagan isn’t a generalist who read about HR — she’s a certified HR
                executive (SPHR, SHRM-SCP, MBA) who has led people functions inside complex,
                high-stakes operations. That includes some of the most demanding environments
                in the country: multi-enterprise tribal governments and sovereign-nation operations. If
                she can build accountable, high-performing HR there, she can do it for your
                organization.
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
                  <p className="font-display font-semibold text-white text-sm">
                    {item.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
      </section>

      {/* ═══════════ ABOUT RUTH (brief) ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <div className="aspect-[3/4] max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/ruth-zaldivar.webp"
                    alt="Ruth Reagan, MBA — Founder & CEO of Reagan Strategic Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F1B2D] rounded text-xs font-medium text-[#D4A574]"
                    >
                      <cred.icon className="w-3.5 h-3.5" />
                      {cred.label}
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-[#B8860B]" />
                  <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                    Your Consultant
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6 leading-tight">
                  Ruth Reagan, MBA
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ruth is an SPHR- and SHRM-SCP-certified HR executive with an MBA and decades of
                  operational experience — from single-site organizations to multi-billion-dollar
                  enterprises. She has built HR functions, led turnarounds, and guided
                  organizations through growth, transition, and change.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Her specialty is stepping in as a fractional or interim CHRO — bringing
                  executive-level strategy and hands-on operational depth exactly when an
                  organization needs it, without the cost of a permanent C-suite hire.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ruth’s approach builds accountability cultures where employees feel valued,
                  leaders are equipped, and organizations perform at their highest level. She
                  partners with leadership to solve the people problems that keep executives up
                  at night — and to build the HR foundation that supports what comes next.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8860B] text-white rounded font-semibold text-sm hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20 group"
                  >
                    <Phone className="w-4 h-4" />
                    Let&apos;s Talk
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#0F1B2D]/20 text-[#0F1B2D] rounded font-semibold text-sm hover:bg-[#0F1B2D]/5 transition-all duration-300 group"
                  >
                    Full Bio
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES LIST ═══════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  How We Help
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-5">
                Services Built for{' '}
                <span className="text-[#B8860B]">Growing Organizations</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you need an interim CHRO for six months or a compliance audit next week,
                our services flex to match your stage, your budget, and your goals.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {services.map((svc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#B8860B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#0F1B2D] font-medium text-[15px]">{svc}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#0F1B2D]/20 text-[#0F1B2D] rounded font-semibold text-sm hover:bg-[#0F1B2D]/5 transition-all duration-300 group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/oklahoma-landscape.jpg"
            alt="Oklahoma landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1B2D]/85" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
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
              Strong People Strategy Is a{' '}
              <span className="text-[#D4A574]">Competitive Advantage</span>
            </h2>
            <p className="text-gray-100 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
              Your people are your biggest investment and your biggest risk. Let’s build the
              HR foundation that protects both — and positions your organization to grow with
              confidence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded font-semibold hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20 group"
            >
              <Phone className="w-4 h-4" />
              Schedule Your FREE Consultation
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════ MINIMAL FOOTER ═══════════ */}
      <footer className="bg-[#0a0f1a] py-8 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo variant="light" />
          <p className="text-gray-500 text-sm" suppressHydrationWarning>
            &copy; 2026 Reagan Strategic Solutions. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-gray-500 text-sm hover:text-[#D4A574] transition-colors"
          >
            Visit Main Site &rarr;
          </Link>
        </div>
      </footer>
    </main>
  )
}
