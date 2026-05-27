import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    id: 'dashboards',
    name: 'Dashboards',
    title: 'Dashboards en Tiempo Real',
    desc: 'Visualizá todas tus métricas clave en un solo lugar. Widgets drag & drop, filtros avanzados y exportación en 1 click.',
    mockup: 'dashboard'
  },
  {
    id: 'alertas',
    name: 'Alertas',
    title: 'Alertas Inteligentes',
    desc: 'Configurá triggers por Slack, Email o Webhook. Detectá anomalías antes que tus usuarios con ML integrado.',
    mockup: 'alerts'
  },
  {
    id: 'api',
    name: 'API',
    title: 'API Developer-First',
    desc: 'REST y GraphQL. SDKs para JS, Python, Go. Autenticación OAuth2 y rate limits de 10k req/min.',
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
          <h2 className="text-5xl font-bold mb-4">Mirá Titan en acción</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Probá las features core sin crear cuenta</p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-2 flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'gradient-bg text-white shadow-lg' 
                    : 'hover:bg-white/5'
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
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 gradient-bg text-white rounded-xl font-semibold"
              >
                Probar ahora →
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 shadow-2xl"
            >
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
        <div className="glass rounded-lg p-4">
          <div className="text-sm text-gray-400">Usuarios Activos</div>
          <div className="text-2xl font-bold">12,543</div>
          <div className="text-xs text-green-500">+12.5%</div>
        </div>
        <div className="glass rounded-lg p-4">
          <div className="text-sm text-gray-400">Revenue</div>
          <div className="text-2xl font-bold">$48.2k</div>
          <div className="text-xs text-green-500">+8.2%</div>
        </div>
      </div>
      <div className="h-32 gradient-bg rounded-lg opacity-50"></div>
    </div>
  )
}

function AlertsMockup() {
  return (
    <div className="space-y-3">
      {['CPU > 90%', 'Error rate spike', 'New user signup'].map((alert, i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-lg p-4 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="flex-1">{alert}</span>
          <span className="text-xs text-gray-400">Hace 2m</span>
        </motion.div>
      ))}
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
      <div className="text-green-400">GET</div>
      <div className="text-gray-300">/api/v1/metrics</div>
      <div className="mt-4 text-gray-500">{'{'}</div>
      <div className="ml-4 text-blue-400">"users"<span className="text-white">:</span> <span className="text-yellow-400">12543</span>,</div>
      <div className="ml-4 text-blue-400">"revenue"<span className="text-white">:</span> <span className="text-yellow-400">48200</span>,</div>
      <div className="ml-4 text-blue-400">"growth"<span className="text-white">:</span> <span className="text-yellow-400">12.5</span></div>
      <div className="text-gray-500">{'}'}</div>
    </div>
  )
}