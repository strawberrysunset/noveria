import React from 'react'
import styled from 'styled-components/macro'
import CoinTelegraph from './cointelegraph-logo.png'
import {Link} from '../components/common'

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
      <Link external to="https://www.coingecko.com">
        <Wrapper { ...rest}>
          <Logo src={CoinTelegraph}/>
          <Text>CoinTelegraph</Text>
        </Wrapper>
      </Link>
    )
}