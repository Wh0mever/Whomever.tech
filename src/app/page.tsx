import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Footer from '@/components/footer'
import AnimatedBackground from '@/components/animated-background'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}

