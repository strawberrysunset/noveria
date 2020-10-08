import React from 'react'
import styled from 'styled-components/macro'
import coinGeckoImage from './CoinGecko-WhiteText.png'
import {Link} from '../components/common'

const Logo = styled.img`
  height: 2.25rem;
`

export const CoinGeckoLogo = ({ ...rest }) => {

  return (
    <Link external to="https://www.coingecko.com">
      <Logo {...rest} src={coinGeckoImage} />
    </Link>
  )
}
