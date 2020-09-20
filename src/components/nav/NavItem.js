import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from '../common'
import {useTheme} from '../../context'

const active = css`
  background: ${(props) => props.theme.colors.neutral[300]};
`

const Wrapper = styled(Link)`
  display: grid;
  place-items: center;
  background: ${(props) => {
    return (
      props.active 
      ? 
      props.theme.colors.neutral[1200] 
      : props.theme.colors.neutral[100] 
    )
    
  }};
  :hover {
    background: ${(props) => props.theme.colors.neutral[200]};
    transition: 0.15s ease;
  }
`

export const NavItem = ({ link, icon: Icon, active }) => {

  const theme = useTheme()

  return (
    <Wrapper active={active} to={link}>
      <Icon
        size="1.5rem"
        color={active ? theme.colors.neutral[100] : theme.colors.neutral[1600]}
      />
    </Wrapper>
  )
}
