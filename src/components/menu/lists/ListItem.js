import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.neutral[200]};
  }
  :active {
    transition: 0.1s ease;
    background-color: ${props => props.theme.colors.neutral[100]};
  }
  padding: 1.125rem 2rem;
  padding-right: 2.25rem;
  max-width: 20rem;
`
const Left = styled.div``

const Right = styled.div`
  color: ${props => props.theme.colors.neutral[800]};
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