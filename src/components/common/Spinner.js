import React from 'react'
import styled from 'styled-components/macro'
import {BiLoaderAlt} from 'react-icons/bi'
import {motion} from 'framer-motion'

const Icon = styled(BiLoaderAlt)`
  height: 100%;
  width: 100%;
`

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Spinner = ({children}) => {

  const [times, setTimes] = React.useState(0)
  
  React.useEffect(() => {
    setTimeout(() => {
      setTimes((times % 3) + 1)
    }, 300)
  }, [times])

  return (
    <>
    {
      children || <p>{'.'.repeat(times)}</p>
      // || 
      // <Wrapper 
      //   initial={{ rotate: '0deg' }}
      //   animate={{ rotate: '360deg' }}
      //   transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}>
      //   <Icon/>
      // </Wrapper>
    }
    </>
  )   
}