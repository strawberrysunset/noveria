import React from 'react'
import styled from 'styled-components/macro'
import coinGeckoImage from './CoinGecko-WhiteText.png'

const Logo = styled.img`
  height: 2.25rem;
`

export const CoinGeckoLogo = ({ ...rest }) => {

  return (
      <Logo {...rest} src={coinGeckoImage} />
  )
}
