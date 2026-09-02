import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TestimonialsContent } from './_components/testimonials-content'

export const metadata = {
  title: 'Testimonials',
  description: 'Testimonials for Reagan Strategic Solutions.',
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TestimonialsContent />
      <Footer />
    </main>
  )
}
