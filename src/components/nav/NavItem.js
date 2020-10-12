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
      props.theme.colors.neutral[1200] 
      : props.theme.colors.neutral[100] 
    )
  }};
  :hover {
    background: ${(props) => props.theme.colors.neutral[400]};
    transition: 0.15s ease;
  }
  padding: 0.5 0rem;
`
const IconWrapper = styled.div`
  position: relative;
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

export const NavItem = ({ highlight, path, icon: Icon, active }) => {

  const theme = useTheme()

  const title = (path === '/') ? 'home' : path.slice(1)

  return (
    <Wrapper active={active ? 'yes':undefined} to={path}>
      <IconWrapper>
        {/* {highlight && <Highlight/>} */}
        <Icon
          title={`Go to ${title} page.`}
          size="1.333rem"
          color={active ? theme.colors.neutral[200] : theme.colors.neutral[1600]}
        />
      </IconWrapper>
    </Wrapper>
  )
}
