import React from 'react'
import styled, {css} from 'styled-components'
import { useLocation } from 'react-router-dom'
import { NavItem } from './NavItem'
import { pages } from '../pages'
import { usePortfolio } from '../../hooks/portfolio'


const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[1200]};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 1px;
  ${props => props.theme.isMobile && css`
    border-top: 1px solid ${props.theme.colors.neutral[300]};
    border-right: none;
  `}
  border-right: 1px solid ${(props) => props.theme.colors.neutral[300]};
`

export const Nav = ({ ...rest }) => {
  const { pathname } = useLocation()
  const { assets } = usePortfolio()

  const NavItems = pages.map(({ path, icon }, idx) => {
    return (
      <NavItem highlight={(assets.length === 0) && path === '/portfolio'} key={idx} path={path} icon={icon} active={pathname === path} />
    )
  })

  return <Wrapper {...rest}>{NavItems}</Wrapper>
}
