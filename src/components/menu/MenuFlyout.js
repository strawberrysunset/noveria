import React from 'react'
import styled from 'styled-components'
import {Attribution} from './Attribution'
import {useMenu} from '../../context'
import {MenuItem} from './MenuItem'
import {motion, AnimatePresence} from 'framer-motion'
import {generateUniqueID} from 'utilities'
import {menuLists} from './lists'

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

const Title = styled.h2`
  font-size: ${props => props.theme.typeScale.h5};
  color: ${props => props.theme.colors.neutral[1100]};
  padding:  1rem 2rem;
  /* padding-bottom: 1.5rem; */
  border-bottom: 1px solid ${props => props.theme.colors.neutral[300]};
`

const MenuListWrapper = styled.ul`
  /* border-top: 0.1rem solid ${props => props.theme.colors.neutral[1200]};  */
  display: grid;
  grid-gap: 1px;
  overflow-y: auto;
  flex-grow: 1;
  height: min-content;
  
  padding: 1rem 0;
  background: ${props => props.theme.colors.neutral[100]};
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const MenuFlyout = ({ ...props }) => {

  const {isOpen, useCurrentList} = useMenu()
  const list = useCurrentList()

  // const variants = {
  //   visible: i => ({ 
  //     opacity: 1,
  //     // transition: {
  //     //   duration: 0.03,
  //     //   ease: 'easeIn'
  //     // }
  //   }),
  //   hidden: { 
  //     opacity: 0,
  //   },
  // }

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} transition={{ ease: "easeInOut", duration: 0.2}} {...props}>
          <Top>
            {/* <Title>Settings</Title> */}
            <MenuListWrapper>
              {list}
            </MenuListWrapper>
          </Top>
          <Attribution css="margin-top: auto;" />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

// {list.map((item, idx) => <MenuItem 
//   // initial="hidden"
//   // animate="visible"
//   // variants={variants}
//   // custom={idx}
//   key={generateUniqueID()}
//   {...item}
// />)}
