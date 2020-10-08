import React from 'react'
import {motion} from 'framer-motion'

export const InfiniteSpin = ({children, duration = 0.5, offset = 0}) => {
  return (
    <motion.div 
      initial={{ rotate: `${0 + offset}deg` }}
      animate={{ rotate: `${360 + offset}deg` }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}