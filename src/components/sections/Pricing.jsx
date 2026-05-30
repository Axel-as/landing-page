import { useState } from 'react'
import { motion } from 'framer-motion'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const plans = [
  {
    name: 'Básico [Demo]',
    desc: 'Concepto de plan inicial para UI',
    monthly: '---',
    annual: '---',
    features: [
      'Ejemplo: límite de recursos',
      'Ejemplo: 1 panel',
      'Ejemplo: retención corta',
      'Ejemplo: soporte estándar',
      'Ejemplo: acceso API'
    ],
    cta: 'Ver detalles demo',
    popular: false
  },
  {
    name: 'Profesional [Demo]',
    desc: 'Concepto de plan intermedio para UI',
    monthly: '---',
    annual: '---',
    features: [
      'Ejemplo: límite ampliado',
      'Ejemplo: paneles múltiples',
      'Ejemplo: retención extendida',
      'Ejemplo: notificaciones',
      'Ejemplo: webhooks',
      'Ejemplo: soporte prioritario',
      'Ejemplo: exportación'
    ],
    cta: 'Ver detalles demo',
    popular: true
  },
  {
    name: 'Empresarial [Demo]',
    desc: 'Concepto de plan avanzado para UI',
    monthly: '---',
    annual: '---',
    features: [
      'Ejemplo: sin límites',
      'Ejemplo: retención larga',
      'Ejemplo: SSO conceptual',
      'Ejemplo: configuración custom',
      'Ejemplo: acuerdo ficticio',
      'Ejemplo: soporte dedicado',
      'Ejemplo: onboarding UI',
      'Ejemplo: auditoría UI'
    ],
    cta: 'Ver detalles demo',
    popular: false
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 text-sm font-semibold mb-4">
            DEMO VISUAL - PRECIOS FICTICIOS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mockup de tabla de precios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Este es un diseño de componente de precios. Ningún plan, costo o feature es real.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-full p-1.5 border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
             !isAnnual? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Vista Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                isAnnual? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Vista Anual
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant="default"
              className={`relative border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition ${
                plan.popular? 'scale-105 border-blue-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  Concepto Destacado
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {plan.desc}
                </CardDescription>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-400 dark:text-gray-600">
                    {plan.monthly}
                  </span>
                  <span className="text-gray-500">
                    /demo
                  </span>
                </div>

                <p className="text-sm mt-1 text-gray-500">
                  {isAnnual? 'Vista anual conceptual' : 'Vista mensual conceptual'}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <div className="w-full">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full"
                    disabled
                  >
                    {plan.cta}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12"
        >
          Todos los nombres, precios y características son ficticios. Proyecto de portafolio únicamente.
        </motion.p>
      </div>
    </section>
  )
}