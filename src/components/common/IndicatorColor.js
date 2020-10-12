import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  color: ${({ isPositive }) => {
  return isPositive
    ? (props) => props.theme.colors.green[100]
    : (props) => props.theme.colors.red[100]
  }};
`
export const IndicatorColor = ({ value, children, ...rest}) => {
    return <Wrapper isPositive={value >= 0} {...rest}>{children}</Wrapper>
}