import { Metadata } from 'next'
import { TribalLandingContent } from './_components/tribal-landing-content'

export const metadata: Metadata = {
  title: 'Tribal HR Consulting',
  description: 'HR consulting for tribal governments and enterprises.',
}

export default function TribalLandingPage() {
  return <TribalLandingContent />
}
