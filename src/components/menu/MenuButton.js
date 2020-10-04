import React from 'react'
import styled from 'styled-components/macro'
import {
  MdDehaze as HamburgerIcon,
  MdArrowBack as BackIcon,
  MdClose as CloseIcon
} from 'react-icons/md'
import { useMenu, useTheme } from '../../context'

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

  const {isOpen, itemsHistory, updateMenu} = useMenu()

  const clickHandler = () => {
    if (itemsHistory.length > 1){
      updateMenu({type : 'go_back'})
      return
    }
    updateMenu({type : 'toggle_menu'})
  }
  
  return (
    <Wrapper onClick={clickHandler} {...rest}>
      {isOpen ? (
        (itemsHistory.length > 1) ? <BackIcon size="1.75rem"/> : <CloseIcon size="2rem"/>
      ) : (
        <HamburgerIcon size="2rem"/>
      )}
    </Wrapper>
  )
}
