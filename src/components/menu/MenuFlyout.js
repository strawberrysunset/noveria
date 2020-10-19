import React from 'react'
import styled from 'styled-components'
import {Attribution} from './Attribution'
import {useMenu} from '../../context'
import {motion, AnimatePresence} from 'framer-motion'
import {darken} from 'polished'
import {useDefaultList, useCurrencyList, useShareList, useThemeList} from './lists'

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.neutral[100]};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 20rem;
  border-right: 1px solid ${(props) => props.theme.colors.neutral[800]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0rem 0rem 2rem darken(0.5, ${(props) => props.theme.colors.neutral[100]});
`

const Title = styled.h2`
  font-size: ${props => props.theme.typeScale.h5};
  color: ${props => props.theme.colors.neutral[1100]};
  padding:  1rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.neutral[300]};
`

const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
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

  const menu = useMenu()
  const base = useDefaultList({updateMenu: menu.updateMenu})
  const currency = useCurrencyList({updateMenu: menu.updateMenu})
  const theme = useThemeList({updateMenu: menu.updateMenu})
  const share = useShareList({updateMenu: menu.updateMenu})

  const currentMenuList = {base, currency, theme, share}[menu.listName]

  const animationProps = {
    initial: { x: -320 },
    animate: { x: 0 },
    exit: { x: -320 } ,
    transition: { 
      ease: "easeInOut",
      duration: 0.2
    }
  }

  return (
    <AnimatePresence>
      {menu.isOpen && (
        <Wrapper {...animationProps} {...props}>
          <Top>
            <MenuListWrapper>{currentMenuList}</MenuListWrapper>
          </Top>
          <Attribution css="margin-top: auto;"/>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}