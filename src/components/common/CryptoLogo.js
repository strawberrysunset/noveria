import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.75rem;
`

const Name = styled.p`

`
const Symbol = styled.p`
  margin-left: 1rem;
  color: ${props => props.theme.colors.neutral[1200]};
`

export const CryptoLogo =({icon, name, symbol, children, ...rest}) => {
  return (
    <Wrapper {...rest}>
      <Icon src={icon}/>
      <Name>{name}</Name>
      <Symbol>{symbol}</Symbol>
    </Wrapper>
  )
}