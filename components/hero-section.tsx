'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-female-executive.jpg"
          alt="Ruth Reagan leading an executive HR consultation in a boardroom"
          fill
          className="object-cover"
          priority />
        
        {/* Stronger overlay on mobile where text covers more image area */}
        <div className="absolute inset-0 bg-[#0a0f1a]/80 md:bg-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/90 via-[#0a0f1a]/75 to-[#0a0f1a]/40" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#B8860B] to-transparent z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-40 pb-24 md:pt-44 md:pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#B8860B]" />
              <span className="text-[#D4A574] text-sm tracking-[0.2em] uppercase font-bold">
                Human Resources Consulting
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-6"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)' }}>
            
            Build Stronger Leaders. Create Engaged Employees.
            {' '}<span className="text-[#D4A574]">Strengthen Tribal Communities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-white/90 leading-relaxed mb-10 max-w-xl"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
            
            At Reagan Strategic Solutions, we believe Human Resources should never be viewed
            as just overhead, but as one of the most influential drivers of organizational
            success. Our mission is driven by compassion: we help organizations build workplaces
            where team members are engaged, leaders are held accountable, cultures are the focus,
            and businesses succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4">
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded font-semibold text-base hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/20 hover:shadow-xl hover:shadow-[#B8860B]/30">
              
              Book Your Free 30-Minute Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded font-semibold text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300">
              
              Our Services
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-5 text-sm text-white/75"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>

            No obligation &bull; No sales pitch &bull; Direct with Ruth &bull; Response within 1 business day
          </motion.p>

          {/* Industries served */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 flex flex-wrap gap-3">
            
            {[
            'Tribal Nations & Enterprises',
            'Private & Public Sector',
            'Multi-Site Operations',
            'Nonprofits & Government'].
            map((item, i) =>
            <div key={i} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-gray-400 font-medium">
                {item}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>);

}