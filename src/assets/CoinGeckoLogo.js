import React from 'react'
import styled from 'styled-components/macro'
import coinGeckoImage from './CoinGecko-WhiteText.png'
import {Link} from '../components/common'

const Logo = styled.img`
  height: 2.5rem;
`

export const CoinGeckoLogo = ({ ...rest }) => {

  // Preload the image.
  React.useEffect(() => {
    const img = new Image();
    img.src = coinGeckoImage;
  }, [])

  return (
    <Link external to="https://www.coingecko.com">
      <Logo {...rest} src={coinGeckoImage} />
    </Link>
  )
}
