import { useState } from 'react'
import { motion } from 'framer-motion'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const plans = [
  {
    name: 'Starter',
    desc: 'Para equipos pequeños empezando',
    monthly: 0,
    annual: 0,
    features: [
      'Hasta 1,000 eventos/mes',
      '1 dashboard',
      'Retención 7 días',
      'Soporte por email',
      'API básica'
    ],
    cta: 'Empezar gratis',
    popular: false
  },
  {
    name: 'Pro',
    desc: 'Para startups en crecimiento',
    monthly: 49,
    annual: 39,
    features: [
      'Hasta 100,000 eventos/mes',
      'Dashboards ilimitados',
      'Retención 90 días',
      'Alertas por Slack/Email',
      'API completa + Webhooks',
      'Soporte prioritario',
      'Exportación CSV/PDF'
    ],
    cta: 'Probar 14 días gratis',
    popular: true
  },
  {
    name: 'Enterprise',
    desc: 'Para equipos grandes con SLA',
    monthly: 'Custom',
    annual: 'Custom',
    features: [
      'Eventos ilimitados',
      'Retención 2 años',
      'SSO + SAML',
      'On-premise disponible',
      'SLA 99.99% uptime',
      'Soporte dedicado 24/7',
      'Onboarding personalizado',
      'Auditoría SOC2'
    ],
    cta: 'Contactar ventas',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Precios simples, sin sorpresas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Elegí el plan que se adapte a tu escala. Cambiá o cancelá cuando quieras.
          </p>

          <div className="inline-flex items-center gap-4 glass rounded-full p-1.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                !isAnnual ? 'gradient-bg text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition relative ${
                isAnnual ? 'gradient-bg text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Anual
              <Badge variant="success" className="absolute -top-3 -right-3 px-2 py-0.5 text-xs">
                -20%
              </Badge>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              variant={plan.popular ? 'gradient' : 'default'}
              hover
              glow={plan.popular}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <Badge 
                  variant="success" 
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Más Popular
                </Badge>
              )}

              <CardHeader>
                <CardTitle className={`text-2xl ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription className={plan.popular ? 'text-white/80' : ''}>
                  {plan.desc}
                </CardDescription>
                
                <div className="mt-6 flex items-baseline gap-2">
                  {typeof plan.monthly === 'number' ? (
                    <>
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'gradient-text'}`}>
                        ${isAnnual ? plan.annual : plan.monthly}
                      </span>
                      <span className={plan.popular ? 'text-white/70' : 'text-gray-500'}>
                        /mes
                      </span>
                    </>
                  ) : (
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'gradient-text'}`}>
                      {plan.monthly}
                    </span>
                  )}
                </div>
                
                {isAnnual && typeof plan.monthly === 'number' && plan.monthly > 0 && (
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    Facturado ${plan.annual * 12} anualmente
                  </p>
                )}
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-midnight-500'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.popular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.popular ? 'secondary' : 'primary'} 
                  size="md" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
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
          Todos los planes incluyen 14 días de prueba. Sin tarjeta de crédito.
        </motion.p>
      </div>
    </section>
  )
}