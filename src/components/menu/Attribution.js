import React from 'react'
import styled from 'styled-components/macro'
import {CoinGeckoLogo} from '../../assets'

const Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  justify-content: center;
  font-weight: 600;
`

const Text = styled.div`
  font-size: ${(props) => props.theme.typeScale.bodySmall};
`

const Logo = styled(CoinGeckoLogo)`
  height: 2.25rem;
`

export const Attribution = ({ ...rest }) => {

  return (
    <Wrapper {...rest}>
      <Text>Powered by</Text>
      <Logo />
    </Wrapper>
  )
}
