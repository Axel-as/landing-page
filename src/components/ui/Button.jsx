import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const variants = {
  primary: 'gradient-bg text-white shadow-lg shadow-midnight-500/30 hover:shadow-midnight-500/50',
  secondary: 'glass hover:bg-white/10 text-gray-900 dark:text-white',
  outline: 'border-2 border-midnight-500 text-midnight-500 hover:bg-midnight-500 hover:text-white',
  ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
}

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...props 
}, ref) => {
  const isDisabled = disabled || loading

  return (
    <motion.button
      ref={ref}
      whileHover={!isDisabled ? { scale: 1.05 } : {}}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl font-semibold
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="w-5 h-5">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="w-5 h-5">{icon}</span>
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button