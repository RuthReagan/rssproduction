'use client'

import Link from 'next/link'
import { SectionReveal } from '@/components/section-reveal'
import {
  Crown, Heart, ShieldCheck, Rocket, Mic,
  ArrowRight, CheckCircle, Zap, FileText, Headphones
} from 'lucide-react'

/* ---------- 5 Pillars ---------- */
const pillars = [
  {
    icon: Crown,
    title: 'Executive HR Strategy',
    tagline: 'Executive HR Leadership On Demand',
    description: 'Step into your organization as a fractional or interim CHRO, providing executive-level HR leadership, strategic direction, and hands-on management when you need it most.',
    features: [
      'Interim CHRO / HR Director',
      'HR department assessments',
      'HR organizational design',
      'Shared services structure',
      'Workforce planning',
      'Succession planning',
      'Compensation management',
    ],
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
  {
    icon: Heart,
    title: 'Culture & Leadership',
    tagline: 'Transform Your Organization From The Inside Out',
    description: 'Build trust, engagement, and a culture of accountability and compassion into the workplace, especially critical during periods of change or growth.',
    features: [
      'Mission, vision & values implementation',
      'Improving morale',
      'Leadership coaching',
      'Engagement surveys',
      'Culture transformation',
      'Employee engagement strategies',
      'Building accountability cultures',
    ],
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Risk',
    tagline: 'Protect Your Organization With Bulletproof HR',
    description: 'Ensure your organization is fully compliant, properly classified, and protected from risk with thorough audits, modern policies, and investigation support.',
    features: [
      'HR compliance & risk assessments',
      'Employee handbooks & policy modernization',
      'Indian Preference & tribal employment practices',
      'FLSA / exempt classification reviews',
      'Workplace investigations & employee relations',
      'Progressive discipline & performance management',
    ],
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    icon: Rocket,
    title: 'Growth & Change',
    tagline: 'Scale Smart, Execute Flawlessly',
    description: 'Whether you\'re opening a new property, merging operations, or restructuring, we bring the HR infrastructure and strategy to ensure smooth execution.',
    features: [
      'Communication strategies',
      'New property openings',
      'High-volume hiring strategy',
      'M&A HR integration',
      'Reorganizations',
      'HRIS / process improvements',
      'Change management support',
    ],
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    icon: Mic,
    title: 'Training & Speaking',
    tagline: 'Develop Leaders, Inspire Teams',
    description: 'High-energy, results-driven training and keynote speaking for tribal governments, enterprises, and HR conferences. Ruth is a featured speaker at NNAHRA annual conferences, Native Nations Human Resources conferences, OIGA, and many others.',
    features: [
      'Mental health training & resources',
      'AI in the workplace',
      'Leadership workshops',
      'HR conference speaking',
      'Tribal HR training',
      'Manager boot camps',
      'Conflict management training',
      'Employee relations training',
    ],
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
  },
]

/* ---------- 3 Engagement Tiers ---------- */
const tiers = [
  {
    icon: Zap,
    tier: 'Tier 1',
    title: 'Advisory & Strategic Consulting',
    subtitle: 'High-value, executive-level engagements',
    examples: [
      'Fractional CHRO',
      'Executive coaching',
      'Culture transformation',
      'HR strategy roadmap',
      'M&A consulting',
    ],
    format: 'Monthly retainer or project fee',
    accent: 'border-t-[#B8860B]',
  },
  {
    icon: FileText,
    tier: 'Tier 2',
    title: 'Project-Based Services',
    subtitle: 'Defined deliverables with clear outcomes',
    examples: [
      'Employee handbook development & revision',
      'Compensation structure',
      'HR audit',
      'Performance appraisal redesign',
      'Leadership training program',
    ],
    format: 'Flat-fee pricing based on scope of work',
    accent: 'border-t-[#0F1B2D]',
  },
  {
    icon: Headphones,
    tier: 'Tier 3',
    title: 'Ongoing Support',
    subtitle: 'Continuous partnership for growing organizations',
    examples: [
      'Monthly HR support',
      'Employee relations guidance',
      'Compliance advisory',
      'Leadership advising',
      'Recruiting support',
    ],
    format: 'Monthly retainer based on organization size',
    accent: 'border-t-gray-300',
  },
]

export function ServicesContent() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-[#0F1B2D] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#D4A574] text-sm font-semibold tracking-[0.2em] uppercase">
                Our Services
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              We Solve Expensive <span className="text-[#D4A574]">HR Problems</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Strategic advisor. Culture expert. Transformation leader. Executive coach.
              Not transactional HR support. This is organizational effectiveness consulting.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                What We Do
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6">
              30 Years of Turning Challenges Into Opportunities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We solve problems based on 30 years of experience. There isn&apos;t a challenge we
              haven&apos;t already turned into an opportunity, and we tailor solutions to your
              challenges. Reagan Strategic Solutions has learned something equally important: not
              every popular HR trend delivers results. Real lasting change doesn&apos;t come from
              the latest buzzword or a one-size-fits-all program. It comes from understanding an
              organization&apos;s culture, listening to its people, building trust, developing
              leaders, and creating systems that support accountability without sacrificing respect.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              While tribal governments and their enterprises are the
              primary focus, Reagan Strategic Solutions also partners with private businesses,
              nonprofits, and any organization seeking executive-level Human Resources leadership
              and organizational consulting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every client receives practical, customized solutions based on real-world executive
              experience, not theory. Our approach is a partnership with honest, result-oriented
              feedback. We take the time to understand each organization&apos;s mission, culture,
              challenges, opportunities and goals before recommending strategies that fit their
              unique needs.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  What We Do
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-4">
                Five Pillars of Expertise
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Built on 30 years of solving the problems that keep executives up at night.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-12">
            {pillars.map((pillar, i) => (
              <SectionReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start p-8 md:p-10 rounded-xl bg-white border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-lg transition-all duration-300">
                  <div className="lg:col-span-2">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${pillar.iconBg} mb-4`}>
                      <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#0F1B2D] tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-[#B8860B] font-semibold text-sm mb-4">
                      {pillar.tagline}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#0F1B2D] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Specialized Tribal & Gaming Expertise */}
      <section className="relative py-24 bg-[#0F1B2D] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#D4A574] text-sm font-semibold tracking-[0.2em] uppercase">
                  Specialized Expertise
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Built for Tribal Governments &amp; Enterprises
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Beyond core HR, we bring exceptional expertise in the areas that make tribal government and enterprise
                operations unique, the work few consultants are equipped to do.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Indian Preference & Tribal Employment Practices',
                desc: 'Indian Preference is more than a policy. It reflects the purpose and mission of many tribal organizations. We align hiring and HR systems to support it.',
                items: ['Indian Preference program reviews', 'Hiring process assessments', 'Recruitment strategy consultation', 'Workforce planning', 'HR process alignment'],
              },
              {
                title: 'Enterprise & Hospitality Workforce Support',
                desc: 'Many tribal enterprises — especially gaming and hospitality — operate 24/7, creating unique workforce challenges. We support the scale, service culture, and pace these operations demand.',
                items: ['Multi-property HR strategy', 'Guest service culture', 'High-volume recruiting', 'New property openings', 'Organizational restructuring'],
              },
              {
                title: 'Workforce Policies & Employee Handbooks',
                desc: 'Policies should reflect your Nation’s values while giving leaders and employees clear expectations and practical guidance.',
                items: ['Employee handbook development', 'Policy revisions & modernization', 'Leadership accountability guidelines', 'Attendance & workplace standards', 'Progressive discipline policy & forms'],
              },
              {
                title: 'Workplace Investigations & Employee Relations',
                desc: 'We help leaders navigate investigations and employee relations while maintaining trust, consistency, and organizational integrity.',
                items: ['Workplace investigations', 'Employee relations consulting', 'Documentation guidance', 'Performance improvement planning', 'Manager coaching & conflict resolution'],
              },
            ].map((block, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 h-full hover:bg-white/[0.06] hover:border-[#B8860B]/30 transition-all duration-300">
                  <h3 className="font-display text-xl font-bold text-white mb-3">{block.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{block.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {block.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#D4A574] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>


      {/* 3-Tier Engagement Model */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  How We Engage
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-4">
                Three Ways to Work Together
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Whether you need a strategic partner, a defined project, or ongoing support,
                we structure engagements to fit your needs.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className={`bg-white rounded-xl border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col border-t-4 ${tier.accent}`}>
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0F1B2D]/5 flex items-center justify-center">
                        <tier.icon className="w-5 h-5 text-[#0F1B2D]" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400">{tier.tier}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0F1B2D] mb-2">{tier.title}</h3>
                    <p className="text-sm text-gray-500 mb-6">{tier.subtitle}</p>
                    <div className="space-y-3">
                      {tier.examples.map((ex, ei) => (
                        <div key={ei} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                          <span className="text-sm text-[#0F1B2D] font-medium">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 py-4 bg-[#FAFAF8] border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium">{tier.format}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  Our Process
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-4">
                How Every Engagement Starts
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Communication is key. We listen and help you identify your pain points, opportunities, and goals.' },
              { step: '02', title: 'Assessment', desc: 'We take a deep dive into your current practices, policies, and pain points.' },
              { step: '03', title: 'Strategy', desc: 'We tailor a unique roadmap with clear expectations and prioritized recommendations.' },
              { step: '04', title: 'Execution', desc: 'Hands-on implementation, training, and coaching to embed lasting improvements.' },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-[#FAFAF8] rounded-xl p-6 border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-md transition-all duration-300 text-center">
                  <div className="font-display text-4xl font-bold text-[#B8860B]/15 mb-3">{item.step}</div>
                  <h3 className="font-display font-bold text-[#0F1B2D] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Why Reagan Strategic Solutions - Cherokee citizen */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Why Reagan Strategic Solutions?
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6">
              A Purpose Far Greater Than Revenue
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a Cherokee Nation citizen and executive HR leader with over 30 years of
              experience, founder and CEO Ruth Reagan understands that tribal organizations exist
              for a purpose far greater than generating revenue. They create opportunities for
              tribal citizens, strengthen communities, preserve culture, and invest in future
              generations. That perspective shapes every client engagement.
            </p>
          </SectionReveal>
        </div>
      </section>


      {/* Differentiator banner */}
      <section className="py-16 bg-[#0F1B2D]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <SectionReveal>
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-4">Why Reagan Strategic</p>
            <blockquote className="font-display text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
              &ldquo;Most HR consultants are either compliance-focused or motivational speakers.
              Very few can <span className="text-[#D4A574]">operationally transform organizations</span> while
              maintaining strong employee trust.&rdquo;
            </blockquote>
            <p className="text-gray-500 text-sm">
              That&apos;s Ruth. That&apos;s Reagan Strategic Solutions.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6">
              Let&apos;s Talk About <span className="text-[#B8860B]">Your Biggest Challenge</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Every engagement starts with a conversation. No sales pitch, just an honest
              assessment of whether we&apos;re the right fit for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded font-semibold text-lg hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20"
            >
              Schedule Your FREE Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}