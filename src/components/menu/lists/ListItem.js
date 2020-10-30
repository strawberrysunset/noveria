import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.neutral[800]};
  }
  :active {
    transition: 0.1s ease;
    background-color: ${props => props.theme.colors.neutral[100]};
  }
  padding: 0 2rem;
  min-height: 3.5rem;
  max-width: 20rem;
`
const Left = styled.div``

const Right = styled.div`
  color: ${props => props.theme.colors.neutral[1200]};
`

export const ListItem = ({ left, right, children, ...rest }) => {
  return (
    <Wrapper { ...rest}>
      <Left>{left}</Left>
      <Right>{right}</Right>
      {children}
    </Wrapper>
  )
}