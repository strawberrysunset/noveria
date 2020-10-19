import React from 'react'
import styled from 'styled-components/macro'
import {
  MdDehaze as HamburgerIcon,
  MdArrowBack as BackIcon,
  MdClose as CloseIcon
} from 'react-icons/md'
import { useMenu } from '../../context'

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  min-width: 4rem;
  background-color: ${(props) => props.theme.colors.neutral[800]};
  border-right: 1px solid ${(props) => props.theme.colors.neutral[800]};
  :hover {
    background-color: ${(props) => props.theme.colors.neutral[800]};
    cursor: pointer;
  }
`

export const MenuButton = ({...rest}) => {

  const menu = useMenu()
  const menuIcon = getMenuIcon()

  return (
    <Wrapper onClick={clickHandler} {...rest}>
      {menuIcon}
    </Wrapper>
  )

  function clickHandler () {
    if (menu.listNameHistory.length > 1){
      return menu.updateMenu({type : 'go_back'})
    }
    menu.updateMenu({type : 'toggle_menu'})
  }

  function getMenuIcon(){
    if (menu.isOpen) {
      if (menu.listNameHistory.length === 1) {
        return <CloseIcon size="2rem"/>
      }
      return <BackIcon size="1.75rem"/>
    }
    return <HamburgerIcon size="2rem"/>
  }
}
