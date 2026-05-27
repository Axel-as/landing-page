import { motion } from 'framer-motion'

const variants = {
  default: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100',
  primary: 'gradient-bg text-white',
  success: 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20',
  danger: 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20',
  info: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
}

export default function Badge({ 
  children, 
  variant = 'default', 
  icon,
  dot = false,
  className = '' 
}) {
  return (
    <motion.span
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
        inline-flex items-center gap-1.5 
        px-3 py-1 rounded-full 
        text-xs font-semibold 
        ${variants[variant]} 
        ${className}
      `}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </motion.span>
  )
}