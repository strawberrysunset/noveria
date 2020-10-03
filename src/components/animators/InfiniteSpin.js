import React from 'react'
import {motion} from 'framer-motion'

export const InfiniteSpin = ({children, duration}) => {
  return (
    <motion.div 
      initial={{ rotate: '0deg' }}
      animate={{ rotate: '360deg' }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.div>
  )
}