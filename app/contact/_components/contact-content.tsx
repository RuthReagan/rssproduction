'use client'

import { SectionReveal } from '@/components/section-reveal'
import { MapPin, Mail, Phone } from 'lucide-react'

export function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1B2D]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              Reach out directly using the contact information below.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-[600px] mx-auto px-6">
          <SectionReveal>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F1B2D] mb-1">Email</h3>
                  <a
                    href="mailto:ruth@reaganstrategicsolutions.com"
                    className="text-[#B8860B] hover:underline"
                  >
                    <span suppressHydrationWarning>ruth@reaganstrategicsolutions.com</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F1B2D] mb-1">Phone</h3>
                  <a
                    href="tel:+19189551%20" 
                    className="text-[#B8860B] hover:underline"
                  >
                    <span suppressHydrationWarning>(918) 955-1010</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F1B2D] mb-1">Location</h3>
                  <p className="text-gray-600">Tulsa, Oklahoma</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
