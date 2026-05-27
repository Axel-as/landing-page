import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const variants = {
  default: 'glass',
  solid: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
  gradient: 'gradient-bg text-white',
  bordered: 'border-2 border-midnight-500/30 bg-transparent'
}

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  hover = true,
  glow = false,
  className = '',
  onClick,
  ...props 
}, ref) => {
  const Component = onClick ? motion.button : motion.div

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      onClick={onClick}
      className={`
        relative rounded-2xl p-6 md:p-8
        transition-all duration-300
        ${variants[variant]}
        ${onClick ? 'cursor-pointer' : ''}
        ${hover ? 'hover:shadow-2xl hover:shadow-midnight-500/20' : ''}
        ${className}
      `}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 gradient-bg blur-2xl opacity-20 rounded-2xl -z-10"></div>
      )}
      {children}
    </Component>
  )
})

Card.displayName = 'Card'

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-2xl font-bold mb-2 ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-gray-600 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-6 pt-6 border-t border-white/10 ${className}`}>
      {children}
    </div>
  )
}

export default Card