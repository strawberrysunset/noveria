import React from 'react'
import styled, {css} from 'styled-components'
import { useLocation } from 'react-router-dom'
import { NavItem } from './NavItem'
import {
  MdHome as HomeIcon,
} from 'react-icons/md'
import {FaGlobeAmericas as MarketsIcon} from 'react-icons/fa'
import {BiNews as NewsIcon} from 'react-icons/bi'
import {RiBriefcase4Fill as PortfolioIcon} from 'react-icons/ri'

const pages = [
  {
    path: '/',
    icon: HomeIcon,
  },
  {
    path: '/assets',
    icon: PortfolioIcon,
  },
  {
    path: '/markets',
    icon: MarketsIcon,
  },
  {
    path: '/news',
    icon: NewsIcon,
  },
]



const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[800]};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 1px;
  ${props => props.theme.isMobile && css`
    border-top: 1px solid ${(props) => props.theme.colors.neutral[1200]};
    border-right: none;
  `}
  
  border-right: 1px solid ${(props) => props.theme.colors.neutral[800]};
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
