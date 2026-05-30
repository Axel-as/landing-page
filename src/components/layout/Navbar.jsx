import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  const links = [
    { name: 'Características', href: '/demo' },
    { name: 'Precios', href: '/demo' },
    { name: 'Preguntas', href: '/demo' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 top-0"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold">Titan</span>
          <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500">
            DEMO
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
            aria-label="Cambiar tema"
          >
            {darkMode? '☀' : '🌙'}
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/demo'}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hidden md:block"
          >
            Ver demo
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}