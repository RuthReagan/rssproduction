'use client'

import Link from 'next/link'
import { SectionReveal } from '@/components/section-reveal'
import {
  Quote,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

const credibility = [
  {
    icon: Award,
    stat: '30+',
    label: 'Years of Executive HR Leadership',
  },
  {
    icon: Users,
    stat: 'Multi-Industry',
    label: 'Gaming, Hospitality, Banking, Oil & Gas',
  },
  {
    icon: TrendingUp,
    stat: 'Multi-State',
    label: 'Experience Across the United States',
  },
]

const faqs = [
  {
    q: 'Does Reagan Strategic Solutions only work with tribal entities?',
    a: 'While our specialty is serving tribal governments and their enterprises — from administration and health services to hospitality and gaming — we also partner with private businesses, nonprofits, healthcare organizations, financial institutions, and other organizations seeking executive Human Resources guidance.',
  },
  {
    q: 'What makes Reagan Strategic Solutions different from other HR consulting firms?',
    a: 'We have a proven track record of solving the most challenging problems. Reagan Strategic Solutions combines more than 30 years of executive HR leadership with specialized experience in tribal government, tribal enterprises, hospitality, banking, and multi-state organizations. Founder and CEO Ruth Reagan is also a proud Cherokee Nation citizen, giving her a unique understanding of the mission, values, and complexities that make tribal organizations different from traditional businesses.',
  },
  {
    q: 'Do you travel to client locations?',
    a: 'Yes. In fact, we insist on at least one face to face meeting. Reagan Strategic Solutions provides consulting services both onsite and virtually. Depending on your organization’s needs, interaction may include in person meetings, virtual consulting, executive coaching, leadership workshops, or a combination of both.',
  },
  {
    q: 'Do you only work with clients in Oklahoma?',
    a: 'No, Reagan Strategic Solutions serves clients throughout Oklahoma and across the United States. With extensive multi-state HR leadership experience, we understand the challenges organizations face when operating across multiple locations.',
  },
  {
    q: 'Can you serve as our Interim CHRO or HR Director?',
    a: 'Absolutely. When organizations experience periods of transition, organizational growth, executive turnover, or while looking for a permanent HR executive, they need an experienced and competent executive Human Resources leader.',
  },
  {
    q: 'Can we hire Reagan Strategic Solutions on a retainer to be available as our Human Resources advisor?',
    a: 'Absolutely. If you do not have a need for a full-time Chief Human Resources Officer but do need access to an experienced Human Resources executive, we can be that advisor. Reagan Strategic Solutions offers a monthly retainer partnership that will provide ongoing support tailored to your organization’s needs.',
  },
  {
    q: 'Do you provide executive coaching?',
    a: 'Yes. We provide one-on-one coaching to executives, managers, supervisors and emerging leaders to improve leadership, communication, conflict resolution, accountability, employee engagement, and strategic decision making.',
  },
  {
    q: 'Can you customize leadership training?',
    a: 'Yes. Based on your organization’s needs, goals, workforce and culture, customized training programs can be created.',
  },
  {
    q: 'What HR services do you provide?',
    a: 'Our services include Interim CHRO Services, HR Department Assessments, Executive Coaching, Leadership Development, Organizational Design, Employee Engagement, Culture Transformation, HR Compliance Reviews, Compensation Strategy, Succession Planning, Workplace Investigations, Change Management, Customer Service Training, AI in Human Resources, Mental Health in the Workplace, HR Process Improvement, and Multi-State HR Consulting.',
  },
  {
    q: 'Can Reagan Strategic Solutions help improve employee engagement?',
    a: 'Yes. We can provide engagement surveys and help organizations identify the cause of low morale, lack of engagement, high turnover, lack of accountability and develop realistic strategies.',
  },
  {
    q: 'Do you help organizations experiencing high turnover?',
    a: 'Yes. In some industries high turnover is the norm, however that does not mean you have to accept it. We can help you understand your organizational challenges, evaluate leadership practices, onboarding, policies, compensation, communication, employee development, and management systems to identify opportunities for improvement.',
  },
  {
    q: 'Can you assist with mergers, acquisitions, or organizational restructuring?',
    a: 'Yes. Reagan Strategic Solutions has experience supporting organizations through mergers, acquisitions, leadership transitions, reorganizations, and growth.',
  },
  {
    q: 'Do you create compensation programs?',
    a: 'Yes. Reagan Strategic Solutions can develop customized competitive compensation structures, salary administration policies and guidelines, job evaluations, and pay strategies that align with organizational goals.',
  },
  {
    q: 'Can you conduct an HR audit?',
    a: 'Absolutely. Reagan Strategic Solutions can evaluate your processes, procedures, compliance policies, employee relations, leadership effectiveness and overall Human Resources operations. We will identify risk, opportunities and strengths.',
  },
  {
    q: 'Do you provide customer service training?',
    a: 'Yes. Exceptional customer service begins with buy-in and support at the top and is constantly being reminded and practiced with all employees. Our customized training programs help organizations build a customer service culture by clear expectations, processes and standards.',
  },
  {
    q: 'What is AI in Human Resources, and can it benefit our organization?',
    a: 'Artificial Intelligence is the future. Organizations who are not jumping on the AI bandwagon are for sure to be left behind. We train leaders in practical and responsible ways to use AI, provide guidance for Human Resources on how to incorporate AI with processes and policy, and offer best practices for using AI while maintaining confidentiality.',
  },
  {
    q: 'What happens during the initial consultation?',
    a: 'Our complimentary consultation is where we will learn about your organization, your challenges and answer your questions. Reagan Strategic Solutions can help solve complex problems that your company likely does not know the root cause. Our focus is to understand how we can best support you.',
  },
  {
    q: 'Why should we choose Reagan Strategic Solutions?',
    a: 'We are the best at what we do. When you partner with Reagan Strategic Solutions, you are not only hiring a consultant who has only studied Human Resources, you are partnering with an executive who has spent more than 30 years leading organizations through growth, change, challenges, and transformation. We are our name, strategic in thinking with practical solutions that help strengthen leaders, reduce risk, engage employees and help build unique cultures.',
  },
]

export function TestimonialsContent() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-[#0F1B2D] pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #D4A574 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent absolute top-0 left-0 right-0" />
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#B8860B]" />
            <span className="font-display font-semibold text-xs uppercase tracking-[0.3em] text-[#D4A574]">
              Testimonials
            </span>
            <div className="h-px w-10 bg-[#B8860B]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Building New Partnerships.
            <br />
            <span className="text-[#D4A574]">Earning Lasting Trust.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
            If you&apos;re visiting Reagan Strategic Solutions, you have taken the first step to a
            new and improved organization. Thank you for visiting our website.
          </p>
        </div>
      </section>

      {/* Welcome message */}
      <section className="bg-white py-24">
        <div className="max-w-[820px] mx-auto px-6">
          <SectionReveal>
            <Quote className="w-12 h-12 text-[#B8860B]/25 mb-8" />
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We are excited to begin partnering with organizations as a newly established
                consulting firm. We look forward to continuing to partner with organizations to help
                them strengthen their leadership, build unique cultures, engage employees and build a
                fun and exceptional workplace.{' '}
                <span className="text-[#0F1B2D] font-semibold">
                  Although our consulting firm is new, the experience behind it is not.
                </span>
              </p>
              <p>
                Founder and CEO Ruth Reagan brings more than 30 years of executive Human Resources
                leadership experience, serving tribal governments and enterprises, hospitality organizations, banking, oil and
                gas, and multi-state employers. Throughout her career, she has built trusted
                relationships with executives, managers, and employees by delivering practical
                solutions, leading through change, and helping organizations achieve lasting results.
              </p>
              <p>
                As we grow, we will highlight testimonials from our clients that have experienced our
                partnership. Reagan Strategic Solutions would be honored to work with you and earn
                your trust and become a lifelong partner. Your success could become our next
                testimonial.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Credibility band */}
      <section className="bg-[#FAFAF8] py-20 border-y border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credibility.map((item, i) => {
              const Icon = item.icon
              return (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 h-full text-center hover:shadow-lg hover:border-[#B8860B]/20 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#0F1B2D] flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-6 h-6 text-[#D4A574]" />
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#0F1B2D] mb-2">{item.stat}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.label}</p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white py-24">
        <div className="max-w-[860px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#B8860B]" />
                <span className="font-display font-semibold text-xs uppercase tracking-[0.3em] text-[#B8860B]">
                  Frequently Asked Questions
                </span>
                <div className="h-px w-10 bg-[#B8860B]" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F1B2D] leading-tight">
                Answers Before You Ask
              </h2>
            </div>
          </SectionReveal>
          <div className="space-y-5">
            {faqs.map((item, i) => (
              <SectionReveal key={i} delay={Math.min(i * 0.03, 0.2)}>
                <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-7 hover:border-[#B8860B]/20 hover:shadow-md transition-all duration-300">
                  <h3 className="font-display font-bold text-[#0F1B2D] text-lg mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next testimonial highlight + CTA */}
      <section className="relative bg-[#0F1B2D] py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #D4A574 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-[820px] mx-auto px-6 text-center">
          <SectionReveal>
            <Sparkles className="w-10 h-10 text-[#D4A574] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
              Your success could become our{' '}
              <span className="text-[#D4A574]">next testimonial.</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mt-6">
              Reagan Strategic Solutions would be honored to work with you, earn your trust, and
              become a lifelong partner.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#A67C00] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
              >
                Schedule Your FREE Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
