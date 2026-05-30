import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Persona Ejemplo A',
    role: 'Rol Ficticio [Demo]',
    initial: 'A',
    content: 'Este es un texto placeholder para mostrar el diseño de tarjetas de testimonio. Ninguna opinión es real.',
    metric: 'Concepto UI'
  },
  {
    name: 'Persona Ejemplo B',
    role: 'Rol Ficticio [Demo]',
    initial: 'B',
    content: 'Mockup de cómo se vería una reseña de usuario. El contenido es 100% inventado para portafolio.',
    metric: 'Concepto UI'
  },
  {
    name: 'Persona Ejemplo C',
    role: 'Rol Ficticio [Demo]',
    initial: 'C',
    content: 'Ejemplo de componente de testimonios. Todas las personas y empresas mencionadas son ficticias.',
    metric: 'Concepto UI'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length
      }
      return prev === 0? testimonials.length - 1 : prev - 1
    })
  }

  return (
    <section className="py-24 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 text-sm font-semibold mb-4">
            TESTIMONIOS FICTICIOS - SOLO DISEÑO
          </div>

          <h2 className="text-5xl font-bold mb-4">
            Mockup de sección de reseñas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Diseño conceptual de tarjetas de testimonio. Ninguna persona o empresa es real.
          </p>
        </motion.div>

        <div className="relative min-h- md:min-h-">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700 relative">
                {/* Watermark */}
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-300 dark:text-gray-700 rotate-12 select-none">
                  UI DEMO
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {testimonials[current].initial}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex gap-1 justify-center md:justify-start mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-lg md:text-xl mb-4 text-gray-700 dark:text-gray-200">
                      "{testimonials[current].content}"
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="font-bold">{testimonials[current].name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[current].role}
                        </div>
                      </div>

                      <div className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full text-sm font-bold">
                        {testimonials[current].metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-3 rounded-full hover:scale-110 transition hidden md:block border border-gray-200 dark:border-gray-700"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-3 rounded-full hover:scale-110 transition hidden md:block border border-gray-200 dark:border-gray-700"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current? 1 : -1)
                setCurrent(i)
              }}
              className={`h-2 rounded-full transition-all ${
                i === current
               ? 'bg-blue-500 w-8'
                  : 'bg-gray-300 dark:bg-gray-700 w-2'
              }`}
              aria-label={`Ir a testimonio ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-xs text-center text-gray-400 dark:text-gray-600 mt-12 max-w-2xl mx-auto">
          * Todas las personas, cargos y empresas son inventadas para este portafolio.
          No representan clientes reales ni opiniones reales.
        </p>
      </div>
    </section>
  )
}