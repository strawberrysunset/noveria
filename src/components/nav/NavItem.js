import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from '../common'
import {useTheme} from '../../context'
import {MdStar} from 'react-icons/md'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  background: ${(props) => {
    return (
      props.active === 'yes'
      ? 
      props.theme.colors.neutral[800] 
      : props.theme.colors.neutral[200] 
    )
  }};
  /* background: ${(props) => props.theme.colors.neutral[100]}; */
  :hover {
    background: ${(props) => props.theme.colors.neutral[800]};
    transition: 0.05s ease;
  }
  ${props => {
    if (props.active) {
      if (!props.theme.isMobile) {
        return css`
          border-right: 0.125rem solid ${props.theme.colors.neutral[1400]};
          padding-right: -0.125rem;
          padding-left: +0.125rem;
        `
      }
      return css`
          border-top: 0.125rem solid ${props.theme.colors.neutral[1400]};
          /* padding-top: -0.125rem;
          padding-bottom: +0.125rem; */
        `
    }
  }}
  padding: 0.5 0rem;
`
const IconWrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: 0.5rem;
  place-items: center;
  ${props => props.theme.isMobile && css`
    grid-gap: 0.35rem;
  `}
`

const Highlight = styled.circle`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  box-shadow: 1rem 1rem 1rem ${props => props.theme.colors.green[100]};
  color: ${props => props.theme.colors.green[100]};
`

const Text = styled.p`
  font-size: ${props => props.theme.typeScale.caption};
  color: ${props => props.theme.colors.neutral[1200]};
  text-transform: uppercase;
  
`

export const NavItem = ({ highlight, path, icon: Icon, active }) => {

  const theme = useTheme()

  const pageName = (path === '/') ? 'home' : path.slice(1)

  return (
    <Wrapper active={active ? 'yes':undefined} to={path}>
      <IconWrapper>
        {/* {highlight && <Highlight/>} */}
        <Icon
          title={`Go to ${pageName} page.`}
          size="1.333rem"
          color={theme.colors.neutral[1400]}
        />
        <Text>{pageName}</Text>
      </IconWrapper>
    </Wrapper>
  )
}
