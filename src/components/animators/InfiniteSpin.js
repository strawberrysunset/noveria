import React from 'react'
import {motion} from 'framer-motion'
import {css} from 'styled-components'

export const InfiniteSpin = ({children, duration = 0.5, offset = 0, ...rest}) => {
  return (
    <motion.div  
      initial={{ rotate: `${0 + offset}deg` }}
      animate={{ rotate: `${360 + offset}deg` }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}