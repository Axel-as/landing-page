import { motion } from 'framer-motion'

const logos = [
  { name: 'Notion', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Vercel', url: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png' },
  { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Linear', url: 'https://cdn.worldvectorlogo.com/logos/linear-1.svg' },
  { name: 'Figma', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Slack', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
]

export default function LogoStrip() {
  return (
    <section className="py-16 px-4 border-y border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider font-semibold"
        >
          Confiado por +10,000 equipos de producto
        </motion.p>

        <div className="hidden md:grid grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center items-center h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-12"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 h-12 w-24 flex items-center justify-center grayscale opacity-60"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}