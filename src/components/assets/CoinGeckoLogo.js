import React from 'react'
import styled from 'styled-components/macro'
import coinGeckoImageWhite from '../../assets/CoinGecko-WhiteText.png'
import coinGeckoImageBlack from '../../assets/CoinGecko.png'
import {useSettings} from '../../context'
const Logo = styled.img`
  height: 2.25rem;
`

export const CoinGeckoLogo = ({ ...rest }) => {
  const {darkMode} = useSettings()
  return (
      <Logo {...rest} src={darkMode ? coinGeckoImageWhite : coinGeckoImageBlack} />
  )
}
