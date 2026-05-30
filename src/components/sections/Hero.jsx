import { motion, useScroll, useTransform } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="primary" dot className="mb-6">
            Proyecto Demo - UI/UX
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Concepto de<br />Dashboard SaaS
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Maqueta visual de una plataforma de analytics. Todos los datos, textos y funcionalidades 
            son ficticios y solo para mostrar diseño de interfaz.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#features">
              <Button 
                variant="primary" 
                size="lg"
                icon={<span>→</span>}
                iconPosition="right"
              >
                Explorar diseño
              </Button>
            </a>
            
            <a href="#features">
              <Button variant="secondary" size="lg">
                Ver componentes
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Solo Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Datos Ficticios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Portafolio 2026</span>
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl opacity-20 rounded-3xl"></div>
          
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl relative border border-gray-200 dark:border-gray-700">
            {/* Watermark */}
            <div className="absolute top-4 right-4 text-xs font-bold text-gray-400 dark:text-gray-600 rotate-12 select-none">
              UI DEMO
            </div>

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
                  className="h-8 rounded-lg bg-gradient-to-r from-blue-500/30 to-purple-600/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">XX</div>
                <div className="text-xs text-gray-500">Métrica A</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">XX%</div>
                <div className="text-xs text-gray-500">Métrica B</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">X.X</div>
                <div className="text-xs text-gray-500">Métrica C</div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Gráfico ilustrativo - sin datos reales
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}