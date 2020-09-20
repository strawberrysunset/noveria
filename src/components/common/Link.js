import React from 'react'
import styled from 'styled-components'
import {Link as UnstyledRRDLink} from 'react-router-dom'

export const RRDLink = styled(UnstyledRRDLink)`
  .active {
    ${props => props.theme.colors.neutral[800]}
  }
`
const NativeLink = styled.a``

export const Link = ({external, to, children, ...rest}) => {
  return (
    external 
    ? 
    <NativeLink href={to} target="_blank" rel="external nofollow noreferrer noopener" {...rest}>{children}</NativeLink>
    : 
    <RRDLink to={to} {...rest}>{children}</RRDLink>
  )
}