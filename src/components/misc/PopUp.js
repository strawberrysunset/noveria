import React from 'react'
import styled from 'styled-components/macro'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose as CloseIcon } from 'react-icons/md'
import {useNotification} from '../../context'

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 998;
  display: grid;
  place-items: center;
`
const Dialog = styled(motion.div)`
  position: absolute;
  max-width: 24rem;
  margin: 0 1.5rem;
  background: ${(props) => props.theme.colors.neutral[100]};
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);
  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
`
const CloseButton = styled(CloseIcon)`
  position: absolute;
  color: ${(props) => props.theme.colors.neutral[200]};
  :hover {
   
  }
  right: 1.5rem;
  top: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
`

export const PopUp = ({ handleClose, showing, children, ...rest }) => {

  const animations = {
    wrapper: {
      animate: { opacity: [0, 1] },
      exit: { opacity: [1, 0] },
    },
    dialog: {
      animate: { scale: [0, 1] },
      exit: { scale: [1, 0] },
    },
  }

  return (
    <AnimatePresence>
      {showing && (
        <Wrapper
          onClick={handleClose}
          {...animations.wrapper}
          {...rest}
        >
          <Dialog {...animations.dialog}>
            <button onClick={handleClose}>
              <CloseButton />
            </button>
            {children}
          </Dialog>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
