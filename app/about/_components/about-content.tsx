'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionReveal } from '@/components/section-reveal'
import { AnimatedCounter } from '@/components/animated-counter'
import {
  CheckCircle, Award, BookOpen, Target, Heart,
  ArrowRight, Shield, Users, Briefcase, GraduationCap, BadgeCheck, Trophy
} from 'lucide-react'

const certifications = [
  { icon: Award, title: 'MBA', desc: 'Master of Business Administration, Northeastern State University' },
  { icon: GraduationCap, title: 'B.S. Organizational Leadership', desc: 'Bachelor of Science, Northeastern State University' },
  { icon: Shield, title: 'SPHR', desc: 'Senior Professional in Human Resources' },
  { icon: BookOpen, title: 'SHRM-SCP', desc: 'Society for Human Resource Management, Senior Certified Professional' },
  { icon: Target, title: 'THRP', desc: 'Tribal Human Resources Professional' },
  { icon: BadgeCheck, title: 'TMP', desc: 'Tribal Management Professional' },
  { icon: Heart, title: 'Workplace Mental Health Ally', desc: 'Certified SHRM Workplace Mental Health Ally' },
  { icon: GraduationCap, title: 'Leadership Native Oklahoma', desc: 'LNO, Class of 2021' },
]

const values = [
  {
    icon: Shield,
    title: 'Rebuild Trust',
    description: 'We build high-performing workplace cultures and restore confidence in leadership, especially after periods of turnover, conflict, or organizational upheaval.',
  },
  {
    icon: Users,
    title: 'Transform Culture',
    description: 'We don\'t just diagnose problems. We architect cultural shifts that align teams around shared mission, values, and accountability.',
  },
  {
    icon: Briefcase,
    title: 'Lead Change',
    description: 'From M&A integrations to new property openings, we bring the strategic HR infrastructure that makes complex transitions seamless.',
  },
  {
    icon: Heart,
    title: 'Accountability Without Destroying Morale',
    description: 'This is what sets Ruth apart. Building high-performance cultures where people are held accountable AND feel valued. That combination is rare.',
  },
]

export function AboutContent() {
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
                About Us
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Rebuilding Trust. Transforming Culture.
              <br />
              <span className="text-[#D4A574]">Leading Change.</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Most HR consultants are either compliance-focused or motivational speakers.
              Reagan Strategic Solutions does both, and operationally transforms organizations
              while maintaining employee trust.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission / Why We Exist */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Why We Exist
              </span>
              <div className="h-px w-10 bg-[#B8860B]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-6">
              Reagan Strategic Solutions Does Both
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Reagan Strategic Solutions was founded with the sole purpose to share the experience
              and knowledge of what actually works to help organizations build an environment where
              team members thrive, leaders know how to lead, and organizations can grow and be
              successful. Helping organizations and Human Resources departments understand their
              &ldquo;why&rdquo; is critical. Reagan Strategic Solutions has experience in creating a
              mission and vision, decreasing turnover, improving morale, creating consistent
              processes, leadership development, improved communication, and implementing AI in
              Human Resources practices so that teams can be more efficient and focus on being more
              strategic.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Strong leaders create engaged employees. Engaged employees provide exceptional
              service. Exceptional service creates happy customers that will return and become loyal
              guests. And successful organizations generate the resources needed to invest in their
              future. Specifically for tribal entities, that success has so much more on the line.
              Success creates opportunities that benefit entire communities through jobs, education,
              healthcare, scholarships, and housing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ruth has learned something equally important: not every popular HR trend delivers
              results. Real lasting change doesn&apos;t come from the latest buzzword or a
              one-size-fits-all program. It comes from understanding an organization&apos;s culture,
              listening to its people, building trust, developing leaders, and creating systems that
              support accountability without sacrificing respect. That is the experience Reagan
              Strategic Solutions brings to every client.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              While tribal governments and their enterprises are the
              primary focus, Reagan Strategic Solutions also partners with private businesses,
              nonprofits, and any organization seeking executive level Human Resources leadership
              and organizational consulting.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 text-left">
              {[
                'Stronger leaders',
                'Healthier workplace cultures',
                'Higher employee engagement',
                'Lower turnover',
                'Better guest experiences',
                'Greater organizational performance',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-4 rounded-lg bg-white border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#0F1B2D]">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Ruth's Story */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/ruth-regan.webp"
                    alt="Ruth Reagan, MBA - Founder of Reagan Strategic Solutions"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0F1B2D] text-white p-6 rounded-xl shadow-xl">
                  <div className="font-display text-3xl font-bold">
                    <AnimatedCounter end={30} suffix="+" />
                  </div>
                  <div className="text-sm font-medium mt-1">Years of HR Excellence</div>
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
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-2">
                  Ruth Reagan
                </h2>
                <p className="text-[#B8860B] font-semibold text-sm tracking-wide mb-6">
                  MBA, SPHR, SHRM-SCP, THRP, TMP, LNO
                </p>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#0F1B2D] mb-6">
                  <div className="w-11 h-11 rounded-lg bg-[#B8860B]/15 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <div>
                    <p className="text-white font-display font-bold text-sm">NNAHRA Leader of the Year, 2024</p>
                    <p className="text-gray-400 text-xs mt-1">National Native American Human Resources Association</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ruth Reagan is a proud citizen of the Cherokee Nation and has over 30 years of
                    experience in strategic management, leadership development, executive coaching,
                    talent strategies, change management, compensation management and employee
                    relations. The last 10 years, Ruth held the position as Human Resources director
                    for Muscogee Nation Gaming Enterprises (MNGE). Ruth often says she felt as
                    passionate about Muscogee citizens as she did her own tribe and ensured MNGE was
                    the best employer in Oklahoma by ensuring engaged employees in order to make more
                    revenue to send back to the Muscogee citizens.
                  </p>
                  <p>
                    Ruth is known for building morale, trust and dynamic Human Resources teams,
                    pushing them to focus on personal development and obtain certifications.
                    Throughout Ruth&apos;s 30 year career, she has helped organizations design
                    compensation strategies, integrate mergers and acquisitions, open new
                    properties, coach executives, improve employee engagement, develop succession
                    plans, implement Human Resources technology, strengthen compliance, and lead
                    organizations through significant change.
                  </p>
                  <p>
                    Ruth founded Reagan Strategic Solutions because she believes leadership
                    development is one of the most valuable investments an organization can focus on,
                    yet it is often one of the most overlooked. Through her work with tribal governments and enterprises,
                    banking, and oil &amp; gas, Ruth gained deep expertise in the unique HR
                    challenges facing diverse industries.
                  </p>
                  <p>
                    Ruth has been a featured speaker at NNAHRA annual conferences, Native Nations
                    Human Resources conferences, OIGA, and many others. Reagan Strategic Solutions was founded to bring first-class,
                    culturally-informed HR consulting to tribal governments and enterprises, the same
                    caliber of service typically reserved for Fortune 500 companies.
                  </p>
                  <p className="pt-1 text-[#0F1B2D] font-semibold">Over her career, Ruth has:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {[
                      'Led Human Resources for organizations supporting more than 4,000 employees',
                      'Directed HR across multiple states and multiple locations',
                      'Developed executive leadership teams',
                      'Designed compensation structures and pay programs',
                      'Built performance management systems',
                      'Created employee engagement strategies',
                      'Led organizational restructuring initiatives',
                      'Managed mergers and acquisitions from the HR perspective',
                      'Opened new enterprise and hospitality properties',
                      'Led large-scale recruitment initiatives',
                      'Implemented HR technology and process improvements',
                      'Conducted HR audits and compliance reviews',
                      'Built succession planning strategies',
                      'Developed customer service cultures that improve both employee and guest experiences',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  Credentials
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-4">
                Professional Certifications
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Backed by rigorous education and industry-leading certifications.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications?.map((cert: any, i: number) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0F1B2D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B]/10 transition-colors">
                      <cert.icon className="w-6 h-6 text-[#0F1B2D] group-hover:text-[#B8860B] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#0F1B2D] mb-1">{cert?.title ?? ''}</h3>
                      <p className="text-sm text-gray-500">{cert?.desc ?? ''}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                  Our Foundation
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-4">
                Core Values
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                The principles that guide every engagement and relationship.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values?.map((value: any, i: number) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5 p-7 rounded-xl bg-[#FAFAF8] border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-[#0F1B2D] flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0F1B2D] text-lg mb-2">{value?.title ?? ''}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{value?.description ?? ''}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / Philosophy */}
      <section className="py-24 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-[860px] mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#B8860B]" />
              <span className="text-[#B8860B] text-sm font-semibold tracking-[0.2em] uppercase">
                Our Approach
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1B2D] tracking-tight mb-8">
              Why Reagan Strategic Solutions Exists
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Every client receives practical, customized solutions based on real-world executive
                experience, not theory. Our approach is a partnership with honest, result-oriented
                feedback. We take the time to understand each organization&apos;s mission, culture,
                challenges, opportunities and goals before recommending strategies that fit their
                unique needs.
              </p>
              <p>
                At Reagan Strategic Solutions, success isn&apos;t measured by the number of reports
                we produce or training sessions we deliver. Success is measured by stronger leaders,
                healthier workplace cultures, higher employee engagement, lower turnover, better
                guest and customer experiences, and greater organizational performance. And for the
                tribal organizations we are honored to serve, success is also measured by the lasting
                impact those achievements have on tribal citizens and future generations.
              </p>
              <p>
                That is why Reagan Strategic Solutions exists. Not simply to improve Human Resources,
                but to help organizations build workplaces where people, businesses, and communities
                succeed together.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F1B2D]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Let&apos;s Talk About Your <span className="text-[#D4A574]">Biggest Challenge</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              No sales pitch, just an honest assessment of whether we&apos;re the right fit for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded font-semibold text-lg hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20"
            >
              Book Your Free 30-Minute Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-gray-500 text-sm mt-5">
              No obligation. No sales pitch. Just a direct conversation with Ruth about what your
              organization needs, and a response within one business day.
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
