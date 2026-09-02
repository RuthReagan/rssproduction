'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/section-reveal'

import { Logo } from '@/components/logo'
import {
  ArrowRight, Phone, Shield, Users, Gavel, Building2,
  Layers, HeartHandshake, Scale, UserCog, CheckCircle,
  Award, BookOpen, Target, Heart, GraduationCap, BadgeCheck,
  ChevronDown, AlertTriangle, TrendingDown, Clock, DollarSign,
} from 'lucide-react'

/* ────────── Pain Points (tribal/gaming specific) ────────── */
const painPoints = [
  {
    icon: TrendingDown,
    title: 'High Turnover Across Your Enterprise',
    description:
      'When team members leave faster than you can hire — on the gaming floor, in hospitality, or across administration — service suffers, overtime costs spike, and morale drops across every shift.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance Across Multiple Jurisdictions',
    description:
      'Tribal law, federal regulations, gaming commission requirements, FLSA classifications — the compliance landscape is uniquely complex and the stakes are high.',
  },
  {
    icon: Clock,
    title: 'Leadership Gaps After Executive Transitions',
    description:
      'Political cycles, retirements, and rapid growth leave organizations without steady HR leadership exactly when they need it most.',
  },
  {
    icon: Users,
    title: 'Culture That Doesn\'t Match the Mission',
    description:
      'Your nation\'s mission talks about community impact — but employees feel disconnected, unheard, or unsupported. The gap erodes trust and performance.',
  },
  {
    icon: DollarSign,
    title: 'Compensation & Classification Uncertainty',
    description:
      'Are your positions classified correctly? Is your pay competitive regionally? Misclassification risk and pay equity gaps are expensive to fix after the fact.',
  },
  {
    icon: Scale,
    title: 'Navigating Indian Preference & Tribal Employment Policies',
    description:
      'Balancing Indian Preference, tribal employment rights, and operational needs requires someone who understands sovereignty — not just federal employment law.',
  },
]

/* ────────── Differentiators ────────── */
const differentiators = [
  { icon: Layers, label: 'Multi-Enterprise Operations' },
  { icon: Gavel, label: 'Gaming Regulatory Expertise' },
  { icon: Users, label: 'Indian Preference Compliance' },
  { icon: Building2, label: 'Hospitality & Guest Services' },
  { icon: HeartHandshake, label: 'Community-Centered Approach' },
  { icon: Scale, label: 'Sovereign Government HR' },
  { icon: UserCog, label: 'Executive Transition Support' },
  { icon: Shield, label: 'Workplace Investigations' },
]

/* ────────── Services (tribal-focused subset) ────────── */
const services = [
  'Fractional & Interim CHRO / HR Director',
  'HR department assessments & restructuring',
  'Culture transformation & employee engagement',
  'Compliance audits & risk assessments',
  'Employee handbook development & policy modernization',
  'Customer service & hospitality training programs',
  'Leadership development & coaching',
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

export function TribalLandingContent() {
  return (
    <main className="min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_indigenous_consultation.png"
            alt="Executive HR strategy session with tribal leadership"
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
          {/* Logo */}
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
                  Built for Indian Country
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
              Strategic HR for{' '}
              <span className="text-[#D4A574]">Sovereign Nations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/90 leading-relaxed mb-10 max-w-xl"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
            >
              Your tribal enterprise isn&apos;t a typical organization — so why settle for a
              typical HR consultant? Reagan Strategic Solutions brings executive-level HR
              leadership built specifically for tribal governments, enterprises, and
              hospitality enterprises.
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
                The HR Challenges Tribal Leaders{' '}
                <span className="text-[#B8860B]">Know Too Well</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These aren&apos;t hypothetical problems — they&apos;re the reality for
                tribal governments and enterprises managing thousands of team members
                across multiple departments and jurisdictions.
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
                Most HR Consultants Don&apos;t Understand{' '}
                <span className="text-[#D4A574]">Indian Country</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Tribal governments and their enterprises aren&apos;t just another industry.
                Sovereignty, Indian Preference, gaming commission regulations, multi-enterprise
                structures, political dynamics, and community impact create an HR environment
                that generic consultants simply aren&apos;t equipped to navigate. Ruth Reagan
                is — because she&apos;s built her career inside it.
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
                {/* Credentials strip */}
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
                  Ruth is a Cherokee Nation citizen, SPHR- and SHRM-SCP-certified HR executive
                  with deep operational experience inside tribal enterprises — from single-site
                  tribal governments to multi-enterprise operations spanning gaming, hospitality, health, and more.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  She holds both the Tribal Human Resources Professional (THRP) and Tribal
                  Management Professional (TMP) certifications, credentials held by a select
                  group of professionals who specialize in the unique HR requirements of Indian
                  Country.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Her approach combines executive-level strategy with operational depth —
                  building accountability cultures where employees feel valued, leaders are
                  equipped, and organizations perform at their highest level. When tribal
                  businesses succeed, the impact reaches far beyond the workplace: stronger
                  revenue funds healthcare, housing, education, elder services, and community
                  infrastructure.
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
                <span className="text-[#B8860B]">Tribal Enterprises</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you need an interim CHRO for six months or a compliance audit next week,
                our services are designed for the pace and complexity of tribal operations.
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
              When Tribal Organizations Thrive,{' '}
              <span className="text-[#D4A574]">Communities Thrive</span>
            </h2>
            <p className="text-gray-100 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
              Strong HR infrastructure means stronger revenue, which means stronger healthcare,
              housing, education, and elder services for your community. Let&apos;s build that
              together.
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
