import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'Startups activas',
    desc: 'Confían en DataPulse'
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime garantizado',
    desc: 'SLA enterprise'
  },
  {
    value: 50,
    suffix: 'M+',
    label: 'Eventos procesados',
    desc: 'Por día en tiempo real'
  },
  {
    value: 150,
    suffix: '+',
    label: 'Países',
    desc: 'Usuarios en todo el mundo'
  }
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    duration: 2000,
    bounce: 0 
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (suffix === '%') {
        setDisplayValue(latest.toFixed(1))
      } else if (suffix === 'M+') {
        setDisplayValue(Math.floor(latest))
      } else {
        setDisplayValue(Math.floor(latest).toLocaleString('es-AR'))
      }
    })
    return unsubscribe
  }, [springValue, suffix])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="stats">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que importan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Performance y escala probada en producción
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card 
              key={stat.label}
              variant="default"
              hover
              glow={i === 1} 
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3">
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
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>ISO 27001</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}