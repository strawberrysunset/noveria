import React from 'react'
import styled from 'styled-components/macro'
import CoinTelegraph from '../../assets/cointelegraph-logo.png'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.25rem;
  max-width: min-content;
`

const Logo = styled.img`
  height: 1.75rem;
  width: 1.75rem;
`

const Text = styled.p`
  font-size: ${props => props.theme.typeScale.bodySmall};
`

export const CoinTelegraphLogo = ({ ...rest}) => {
    return (
      <Wrapper { ...rest}>
        <Logo src={CoinTelegraph}/>
        <Text>CoinTelegraph</Text>
      </Wrapper>
    )
}