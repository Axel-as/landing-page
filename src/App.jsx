import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import LogoStrip from './components/sections/LogoStrip'
import Features from './components/sections/Features'
import Stats from './components/sections/Stats'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'


function DemoBanner() {
  return (
    <div className="bg-yellow-500 text-black text-center py-2 px-4 text-sm font-semibold sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span>
          PROYECTO DE PORTAFOLIO - Todos los datos son ficticios.
        </span>
      </div>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <DemoBanner />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          <Hero />
          <LogoStrip />
          <section id="features">
            <Features />
          </section>
          <Stats />
          <section id="pricing">
            <Pricing />
          </section>
          <section id="faq">
            <CTA />
          </section>
        </main>

        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App