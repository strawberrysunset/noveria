import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { NavItem } from './NavItem'
import { pages } from '../pages'


const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[200]};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 1px;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[200]};
  padding: 0.25rem 0;
`

export const Nav = ({ ...rest }) => {
  const { pathname } = useLocation()

  const NavItems = pages.map(({ path, icon }, idx) => {
    return (
      <NavItem key={idx} path={path} icon={icon} active={pathname === path} />
    )
  })

  return <Wrapper {...rest}>{NavItems}</Wrapper>
}
