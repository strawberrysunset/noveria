import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from '../common'
import {useTheme} from '../../context'

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
      : props.theme.colors.neutral[500] 
    )
  }};
  :hover {
    background: ${(props) => props.theme.colors.neutral[400]};
    transition: 0.15s ease;
  }
`

const Text = styled.span`
  text-transform: capitalize;
  font-size:${(props) => props.theme.typeScale.caption};
  margin-top: 0.5rem;
`

export const NavItem = ({ path, icon: Icon, active }) => {

  const theme = useTheme()

  return (
    <Wrapper active={active ? 'yes':undefined} to={path}>
      <Icon
        title={`Go to ${path.slice(1)} page.`}
        size="1.333rem"
        color={active ? theme.colors.neutral[200] : theme.colors.neutral[1600]}
      />
      {/* <Text>{path.slice(1)}</Text> */}
    </Wrapper>
  )
}
