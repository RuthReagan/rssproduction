import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicesContent } from './_components/services-content'

export const metadata = {
  title: 'Services',
  description: 'HR consulting services from Reagan Strategic Solutions.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesContent />
      <Footer />
    </main>
  )
}
