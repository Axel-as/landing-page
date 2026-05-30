import { motion } from 'framer-motion'


const logos = [
  { name: 'Apex Co [Demo]', initial: 'A' },
  { name: 'Nova Labs [Demo]', initial: 'N' },
  { name: 'Pixel Works [Demo]', initial: 'P' },
  { name: 'Quantum [Demo]', initial: 'Q' },
  { name: 'Orbit Inc [Demo]', initial: 'O' },
  { name: 'Zenith [Demo]', initial: 'Z' },
]

export default function LogoStrip() {
  return (
    <section className="py-16 px-4 border-y border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 text-xs font-semibold mb-4">
            DISEÑO CONCEPTUAL
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
            Ejemplo de sección "Nuestros clientes" - Todos los logos son ficticios
          </p>
        </motion.div>

        <div className="hidden md:grid grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center h-12"
            >
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-white font-bold text-sm group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                  {logo.initial}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 hidden lg:block">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-12"
          >
            {[...logos,...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 h-12 flex items-center gap-2 opacity-60"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-white font-bold text-sm">
                  {logo.initial}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-xs text-center text-gray-400 dark:text-gray-600 mt-8">
          * Ninguna de estas empresas existe. Sección solo para mostrar diseño de UI.
        </p>
      </div>
    </section>
  )
}