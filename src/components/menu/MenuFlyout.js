import React from 'react'
import styled from 'styled-components'
import {Attribution} from './Attribution'
import {useMenu} from '../../context'
import {transparentize} from 'polished'
import {MenuItem} from './MenuItem'
import {motion, AnimatePresence} from 'framer-motion'
import {generateUniqueID} from 'utilities'

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.neutral[100]};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  max-width: 20rem;
  border-right: 1px solid ${(props) => props.theme.colors.neutral[200]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.5);
`

const MenuListWrapper = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  flex-grow: 1;
  border-bottom: 1px solid ${props => props.theme.colors.neutral[300]}; 
  /* background: ${props => props.theme.colors.neutral[100]}; */
`

// const Overlay = styled.div`
//   display: contents;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 4rem;
//   background: linear-gradient(0deg, ${props => props.theme.colors.neutral[100]}, rgba(0, 0, 0, 0));
// `

// const FadeOverlay = styled(motion.div)`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top:0;
//   bottom:0;
//   right: 0;
//   background-color: ${props => props.theme.colors.neutral[100]};
// `

export const MenuFlyout = ({ ...props }) => {

  const [menu] = useMenu()

  const currentList = menu.currentList()

  console.log(currentList)

  const variants = {
    visible: i => ({ 
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.05,
        ease: 'easeIn'
      }
    }),
    hidden: { 
      opacity: 0,
      x: -320
    },
  }

  return (
    <AnimatePresence>
      {menu.showing && (
        <Wrapper initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} transition={{ ease: "easeInOut", duration: 0.2}} {...props}>
          <MenuListWrapper>
            {currentList.map((item, idx) => <MenuItem 
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={idx}
              key={generateUniqueID()}
              {...item}
            />)}
          </MenuListWrapper>
          <Attribution />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
