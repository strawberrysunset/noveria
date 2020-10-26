import React from 'react'
import styled from 'styled-components/macro'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose as CloseIcon } from 'react-icons/md'
import {transparentize} from 'polished'

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* height: 100vh;
  width: 100vw; */
  background-color: ${props => transparentize(0.1, props.theme.colors.neutral[100])};
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Dialog = styled(motion.div)`
  position: absolute;
  max-width: 32rem;
  margin: 0 1.5rem;
  background-color: ${props => transparentize(0.2, props.theme.colors.neutral[100])};
  border: 1px solid ${(props) => props.theme.colors.neutral[800]};
`

const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.neutral[1600]};
  :hover {
   cursor: pointer;
   color: ${(props) => props.theme.colors.neutral[1200]};
  }
`

export const PopUp = ({ showing: initialShowing = true, render, showClose = true, ...rest }) => {
  
  const [showing, setShowing] = React.useState(initialShowing);

  const handleClose = React.useCallback(() => {
    setShowing(false)
  }, [])

  const animations = {
    wrapper: {
      initial: { opacity: 0 },
      animate: { opacity: [0, 1] },
      exit: { opacity: [1, 0] },
      transition: {
        duration: 0.2,
      }
    },
    dialog: {
      initial: { scale: 0 },
      animate: { scale: [0, 1] },
      exit: { scale: [1, 0] },
      transition: {
        duration: 0.2,
      }
    },
  }

  return (
    <AnimatePresence>
      {(initialShowing || showing) && <Wrapper  {...animations.wrapper} {...rest}>
        <Dialog {...animations.dialog}>
          {showClose && <CloseButton onClick={handleClose}/>}
          {render({showing, setShowing, handleClose})}
        </Dialog>
      </Wrapper>}
    </AnimatePresence>
  )
}
