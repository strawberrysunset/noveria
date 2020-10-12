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
  bottom: 20%;
  height: 100vh;
  width: 100vw;
  background-color: ${props => transparentize(0.1, props.theme.colors.neutral[100])};
  z-index: 998;
  display: grid;
  place-items: center;
`
const Dialog = styled(motion.div)`
  position: absolute;
  max-width: 32rem;
  margin: 0 1.5rem;
  background-color: ${props => transparentize(0.2, props.theme.colors.neutral[100])};
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);
  border: 1px solid ${(props) => props.theme.colors.neutral[800]};
`
const CloseButton = styled(CloseIcon)`
  position: absolute;
  color: ${(props) => props.theme.colors.neutral[1600]};
  :hover {
   cursor: pointer;
  }
  right: 1.25rem;
  top: 1.25rem;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.5rem;
`

export const PopUp = ({ showing = false, handleClose, content, ...rest }) => {
  
  const animations = {
    wrapper: {
      animate: { opacity: [0, 1] },
      exit: { opacity: [1, 0] },
      transition: {
        duration: 0.2,
      }
    },
    dialog: {
      animate: { scale: [0, 1] },
      exit: { scale: [1, 0] },
      transition: {
        duration: 0.2,
      }
    },
  }

  return (
    <AnimatePresence>
      {showing && <Wrapper id="popUp" {...animations.wrapper} {...rest}>
        <Dialog id="popUp"{...animations.dialog}>
          <CloseButton id="popUp"onClick={handleClose}/>
          {content}
        </Dialog>
      </Wrapper>}
    </AnimatePresence>
  )
}
