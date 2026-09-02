import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutContent } from './_components/about-content'

export const metadata = {
  title: 'About',
  description: 'About Reagan Strategic Solutions.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </main>
  )
}
