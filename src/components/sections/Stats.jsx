import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'

const stats = [
  {
    value: 0,
    suffix: '',
    label: 'Concepto: Métricas',
    desc: 'Ejemplo de diseño de KPIs'
  },
  {
    value: 0,
    suffix: '',
    label: 'Concepto: Disponibilidad',
    desc: 'Mockup de indicador de estado'
  },
  {
    value: 0,
    suffix: '',
    label: 'Concepto: Volumen',
    desc: 'Diseño de contadores de datos'
  },
  {
    value: 0,
    suffix: '',
    label: 'Concepto: Alcance',
    desc: 'Interfaz de mapa global'
  }
]

function Counter({ value }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 1500,
    bounce: 0
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(100) // Siempre anima a 100 como placeholder
    }
  }, [motionValue, isInView])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsubscribe
  }, [springValue])

  return <span ref={ref}>--</span> // Muestra -- en vez de números
}

export default function Stats() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400/40 text-yellow-800 dark:text-yellow-500 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            DATOS FICTICIOS - SOLO DISEÑO UI
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mockups de estadísticas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conceptos visuales de cómo mostrar métricas. Ningún número es real ni está conectado a datos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              variant="default"
              className="text-center border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 relative overflow-hidden"
            >
              {/* Watermark */}
              <div className="absolute top-2 right-2 text-xs font-bold text-gray-300 dark:text-gray-700 rotate-12 select-none">
                DEMO
              </div>

              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <CardTitle className="text-lg mb-1">
                {stat.label}
              </CardTitle>
              <CardDescription className="text-sm">
                {stat.desc}
              </CardDescription>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">
              Aviso legal de portafolio
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 max-w-md">
              Este proyecto no representa una empresa real. Todas las métricas, certificaciones y
              nombres son placeholders usados únicamente para demostrar habilidades de diseño frontend.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}