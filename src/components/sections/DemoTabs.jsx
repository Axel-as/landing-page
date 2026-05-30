import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    id: 'dashboards',
    name: 'Dashboards [Concepto]',
    title: 'Concepto: Dashboards en Tiempo Real',
    desc: 'Este es un mockup visual de cómo se vería un dashboard. Ninguna métrica es real ni hay backend conectado.',
    mockup: 'dashboard'
  },
  {
    id: 'alertas',
    name: 'Alertas [Concepto]',
    title: 'Concepto: Sistema de Alertas',
    desc: 'Ejemplo de UI para configurar notificaciones. Las alertas mostradas son texto placeholder sin funcionalidad.',
    mockup: 'alerts'
  },
  {
    id: 'api',
    name: 'API [Concepto]',
    title: 'Concepto: Documentación API',
    desc: 'Muestra de cómo se vería un endpoint. Los datos y respuestas son ejemplos estáticos para diseño.',
    mockup: 'api'
  }
]

export default function DemoTabs() {
  const [activeTab, setActiveTab] = useState('dashboards')
  const currentTab = tabs.find(t => t.id === activeTab)

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900" id="demo">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400/40 text-yellow-800 dark:text-yellow-500 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            SOLO DISEÑO - SIN FUNCIONALIDAD REAL
          </div>

          <h2 className="text-5xl font-bold mb-4">Mockups de interfaz</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explorá conceptos visuales de un dashboard SaaS. Todo es estático.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-2 flex gap-2 border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4">{currentTab.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {currentTab.desc}
              </p>
              <a href="#features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold"
                >
                  Ver más detalles →
                </motion.button>
              </a>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 relative"
            >
              {/* Watermark de demo */}
              <div className="absolute top-4 right-4 text-xs font-bold text-gray-400 dark:text-gray-600 rotate-12 select-none">
                DEMO UI
              </div>

              {currentTab.mockup === 'dashboard' && <DashboardMockup />}
              {currentTab.mockup === 'alerts' && <AlertsMockup />}
              {currentTab.mockup === 'api' && <ApiMockup />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div>
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">Métrica A [Fake]</div>
          <div className="text-2xl font-bold">XX,XXX</div>
          <div className="text-xs text-gray-500">+/- X.X%</div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">Métrica B [Fake]</div>
          <div className="text-2xl font-bold">$XX.Xk</div>
          <div className="text-xs text-gray-500">+/- X.X%</div>
        </div>
      </div>
      <div className="h-32 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-lg"></div>
      <p className="text-xs text-gray-500 mt-4 text-center">Gráfico ilustrativo sin datos reales</p>
    </div>
  )
}

function AlertsMockup() {
  return (
    <div className="space-y-3">
      {['Ejemplo de alerta 1', 'Ejemplo de alerta 2', 'Ejemplo de alerta 3'].map((alert, i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <span className="flex-1 text-gray-600 dark:text-gray-300">{alert}</span>
          <span className="text-xs text-gray-500">Demo</span>
        </motion.div>
      ))}
      <p className="text-xs text-gray-500 mt-4 text-center">Lista no interactiva - solo diseño</p>
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
      <div className="text-green-400">GET</div>
      <div className="text-gray-300">/api/v1/example</div>
      <div className="mt-4 text-gray-500">{'{'}</div>
      <div className="ml-4 text-blue-400">"data"<span className="text-white">:</span> <span className="text-yellow-400">"placeholder"</span>,</div>
      <div className="ml-4 text-blue-400">"status"<span className="text-white">:</span> <span className="text-yellow-400">"demo"</span>,</div>
      <div className="ml-4 text-gray-500">// Respuesta ficticia</div>
      <div className="text-gray-500">{'}'}</div>
      <p className="text-xs text-gray-500 mt-4 font-sans">JSON de ejemplo sin endpoint real</p>
    </div>
  )
}