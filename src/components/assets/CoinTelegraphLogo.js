import React from 'react'
import styled from 'styled-components/macro'
import CoinTelegraph from '../../assets/cointelegraph-logo.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
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