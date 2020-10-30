import React from 'react'
import styled from 'styled-components/macro'
import {transparentize} from 'polished'
import {MdArrowDropDown} from 'react-icons/md'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

export const ButtonWrapper = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0.75rem 1.25rem;
  padding-top: 1rem;
  border: 1px solid ${(props) => props.theme.colors.neutral[1600]};
  background: ${(props) => transparentize(0.75, props.theme.colors.neutral[100])};
  :hover {
    background: ${(props) => props.theme.colors.neutral[800]};
    border: 1px solid inherit;
  }
  transition: 0.15s ease;
  color: ${(props) => props.theme.colors.neutral[1600]};
  :disabled {
    cursor: default;
    opacity: 0.3;
    :hover {
      /* background: ${props => props.theme.colors.red[100]} */
    }
  }
`


const Label = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.neutral[1600]};
  font-size: ${(props) => props.theme.typeScale.bodySmall};
`

export const Button = ({ label, children, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <ButtonWrapper {...props}>{children}</ButtonWrapper>
    </Wrapper>
  )
}

export const SmallButton = ({ label, children, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <ButtonWrapper {...props}>{children}</ButtonWrapper>
    </Wrapper>
  )
}

export const Input = ({children, ...props}) => {
  return <Button as="input" {...props}>{children}</Button>
}


const SelectWrapper = styled.div`
  position: relative;
`

const Arrow = styled(MdArrowDropDown)`
  position: absolute;
  right: 0.6rem;
  top: 2.25rem;
  height: 2rem;
  width: 2rem;
  z-index: 800;
  pointer-events: none;
  :hover {
    cursor: pointer;
  }
`

export const Select = ({children, ...props}) => {
  return (
    <SelectWrapper>
      <Arrow/>
      <Button as="select" {...props}>

        {children}
      </Button>
    </SelectWrapper>
  )
}
