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