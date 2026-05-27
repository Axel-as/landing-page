import { motion, useScroll, useTransform } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="primary" dot className="mb-6">
            Analytics en tiempo real
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
            Convierte datos<br />en decisiones
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Visualiza, analiza y predice el comportamiento de tus usuarios con la plataforma 
            más rápida del mercado. <span className="font-semibold text-midnight-500">Sin código, sin fricción.</span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon={<span>→</span>}
              iconPosition="right"
            >
              Prueba gratis 14 días
            </Button>
            
            <Button variant="secondary" size="lg">
              Ver demo
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">98 Lighthouse</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">0.2s TTI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">+25% signups</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 gradient-bg blur-3xl opacity-20 rounded-3xl"></div>
          
          <div className="glass rounded-2xl p-8 animate-float shadow-2xl relative">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="space-y-3">
              {[60, 80, 45, 90, 65, 75, 50, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: `${h}%`, opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-8 rounded-lg gradient-bg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold gradient-text">24K</div>
                <div className="text-xs text-gray-500">Usuarios</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">2.1s</div>
                <div className="text-xs text-gray-500">Resp</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}