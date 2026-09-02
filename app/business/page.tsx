import { Metadata } from 'next'
import { BusinessLandingContent } from './_components/business-landing-content'

export const metadata: Metadata = {
  title: 'Business HR Consulting',
  description: 'HR consulting for growing organizations.',
}

export default function BusinessLandingPage() {
  return <BusinessLandingContent />
}
