'use client'

import Link from 'next/link'
import { Logo } from './logo'
import { MapPin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A0F1A] text-white">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              World-class HR consulting for tribal governments, enterprises, and organizations of every kind. 
              30 years of expertise building stronger workforces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A574] mb-5">Navigation</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="/testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">Testimonials</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/sitemap-page" className="text-sm text-gray-400 hover:text-white transition-colors">Site Map</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A574] mb-5">Get In Touch</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>Tulsa, Oklahoma</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span suppressHydrationWarning>ruth@reaganstrategicsolutions.com</span>
              </div>
            </div>
          </div>


        </div>

        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Reagan Strategic Solutions. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Strategic HR for Sovereign Nations
          </p>
        </div>
      </div>
    </footer>
  )
}
