import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactContent } from './_components/contact-content'

export const metadata = {
  title: 'Contact',
  description: 'Contact Reagan Strategic Solutions.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
