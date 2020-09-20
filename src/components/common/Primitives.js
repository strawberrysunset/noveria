import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

export const ButtonWrapper = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1.25rem;
  padding-top: 0.75rem;
  border: 1px solid ${(rest) => rest.theme.colors.neutral[1200]};
  background: ${(rest) => rest.theme.colors.neutral[100]};
  :hover {
    background: ${(rest) => rest.theme.colors.neutral[300]};
    border: 1px solid inherit;
  }
  transition: 0.15s ease;
  max-height: min-content;
  color: ${(rest) => rest.theme.colors.neutral[1200]};
`

const Label = styled.p`
  width: 100%;
  font-size: ${(rest) => rest.theme.typeScale.bodySmall};
`

export const Button = ({ label, children, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <ButtonWrapper {...rest}>{children}</ButtonWrapper>
    </Wrapper>
  )
}

export const Input = ({children, ...rest}) => {
  return <Button as="input" {...rest}>{children}</Button>
}

export const Select = ({children, ...rest}) => {
  return <Button as="select" {...rest}>{children}</Button>
}
