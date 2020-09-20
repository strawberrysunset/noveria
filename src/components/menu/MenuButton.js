import React from 'react'
import styled from 'styled-components/macro'
import {
  MdDehaze as HamburgerIcon,
  MdArrowBack as BackIcon,
  MdClose as CloseIcon
} from 'react-icons/md'
import { useMenu, useTheme } from '../../context'
import {motion} from 'framer-motion'

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  min-width: 4rem;
  border-right: 1px solid ${(props) => props.theme.colors.neutral[200]};
  :hover {
    background: ${(props) => props.theme.colors.neutral[200]};
    cursor: pointer;
  }
`

export const MenuButton = ({...rest}) => {

  const [menu, menuDispatch] = useMenu()

  const clickHandler = () => {
    if (menu.history.length > 1){
      menuDispatch({type : 'go_back'})
      return
    }
    menuDispatch({type : 'toggle_menu'})
  }
  
  return (
    <Wrapper onClick={clickHandler} {...rest}>
      {menu.showing ? (
        (menu.history.length > 1) ? <BackIcon size="1.75rem"/> : <CloseIcon size="2rem"/>
      ) : (
        <HamburgerIcon size="2rem"/>
      )}
    </Wrapper>
  )
}
