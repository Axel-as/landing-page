import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'María González',
    role: 'CPO @ TechFlow',
    avatar: 'https://i.pravatar.cc/100?img=1',
    content: 'DataPulse cambió cómo tomamos decisiones. Pasamos de reportes semanales a insights en tiempo real. El ROI fue inmediato.',
    metric: '+42% retención'
  },
  {
    name: 'Carlos Mendoza',
    role: 'CTO @ StartupX',
    avatar: 'https://i.pravatar.cc/100?img=12',
    content: 'La API es increíble. Integramos en 2 horas lo que antes nos llevaba semanas. El equipo de soporte responde en minutos.',
    metric: '-60% tiempo dev'
  },
  {
    name: 'Ana Silva',
    role: 'Head of Data @ ScaleUp',
    avatar: 'https://i.pravatar.cc/100?img=5',
    content: 'Migramos de Mixpanel y Amplitude. DataPulse es 10x más rápido y cuesta 70% menos. No hay vuelta atrás.',
    metric: '+3x velocidad'
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
          <h2 className="text-5xl font-bold mb-4">
            Amado por equipos de producto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            +10,000 usuarios ya confían en DataPulse
          </p>
        </motion.div>

        <div className="relative h- md:h-">
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
              <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full border-4 border-midnight-500"
                  />
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex gap-1 justify-center md:justify-start mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
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
                      
                      <div className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-bold">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:scale-110 transition hidden md:block"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:scale-110 transition hidden md:block"
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
              className={`w-2 h-2 rounded-full transition-all ${
                i === current 
                 ? 'bg-midnight-500 w-8' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}