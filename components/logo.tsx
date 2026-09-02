'use client'

import Link from 'next/link'

export function Logo({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#1B2A4A]'
  const subColor = variant === 'light' ? 'text-[#D4A574]' : 'text-[#B8860B]'

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-11 h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="https://stackoverflow.com/Content/Sites/stackoverflow/Img/apple-touch-icon.png?v=9168b8ec82a5">
          <defs>
            <linearGradient id="rssGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F4D77E" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#A67C00" />
            </linearGradient>
          </defs>
          {/* Black badge base */}
          <circle cx="50" cy="50" r="47" fill="#0a0f1a" stroke="url(#rssGold)" strokeWidth="2.5" />
          {/* Outer ring */}
          <circle cx="50" cy="50" r="41" fill="none" stroke="url(#rssGold)" strokeWidth="2" />
          {/* Three-point star (Mercedes style) */}
          <path
            d="M50 10 L56.9 46 L84.6 70 L50 58 L15.4 70 L43.1 46 Z"
            fill="url(#rssGold)"
          />

          {/* RSS letters set into the three negative spaces */}
          <g fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="15" fill="#E6C15A" style={{ fill: '#E6C15A' }}>
            <text x="28" y="41" textAnchor="middle">R</text>
            <text x="72" y="41" textAnchor="middle">S</text>
            <text x="50" y="84" textAnchor="middle">S</text>
          </g>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-serif text-[15px] font-bold tracking-tight ${textColor} leading-tight`}>
          REAGAN
        </span>
        <span className={`font-display text-[9px] font-semibold tracking-[0.3em] uppercase ${subColor} leading-tight mt-0.5`}>
          STRATEGIC SOLUTIONS
        </span>
      </div>
    </Link>
  )
}
