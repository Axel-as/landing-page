import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  const links = ['Features', 'Pricing', 'FAQ']

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 glass top-0"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold">TITAN</span>
        </div>

        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-midnight-500 transition">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-lg glass hover:scale-105 transition"
          >
            {darkMode? '☀️' : '🌙'}
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 gradient-bg text-white rounded-lg font-semibold hidden md:block"
          >
            Empezar gratis
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}