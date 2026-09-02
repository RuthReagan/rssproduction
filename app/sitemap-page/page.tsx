import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Home, User, Briefcase, Mail, MessageSquareQuote, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Site Map',
  description: 'Site map for Reagan Strategic Solutions.',
}

const pages = [
  {
    href: '/',
    title: 'Home',
    description: 'Welcome to Reagan Strategic Solutions, world-class HR consulting for tribal organizations.',
    icon: Home,
  },
  {
    href: '/about',
    title: 'About Ruth Reagan',
    description: '30+ years of executive HR leadership, certifications, and a proven approach to transforming workforces.',
    icon: User,
  },
  {
    href: '/services',
    title: 'Services',
    description: 'The 5 Pillars: Executive HR Strategy, Culture & Leadership, Compliance & Risk, Growth & Change, and Training & Speaking.',
    icon: Briefcase,
  },

  {
    href: '/testimonials',
    title: 'Testimonials',
    description: 'Building new partnerships and earning lasting trust, backed by 30+ years of executive HR leadership.',
    icon: MessageSquareQuote,
  },
  {
    href: '/contact',
    title: 'Contact',
    description: 'Schedule your free consultation and start strengthening your tribal workforce today.',
    icon: Mail,
  },
]

export default function SiteMapPage() {
  return (
    <main className="min-h-screen">
      <Header />

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
          <span className="font-display font-semibold text-xs uppercase tracking-[0.3em] text-[#D4A574]">
            Site Map
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4">
            Explore Our Website
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-5">
            A complete overview of every page on the Reagan Strategic Solutions website.
          </p>
        </div>
      </section>

      {/* Page list */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages.map((page) => {
              const Icon = page.icon
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#B8860B]/40 transition-all duration-300 p-7 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0F1B2D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#D4A574] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-serif text-xl font-bold text-[#0F1B2D]">{page.title}</h2>
                        <ArrowUpRight className="w-4 h-4 text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">{page.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
