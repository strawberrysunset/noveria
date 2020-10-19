import React from 'react'
import styled, {css} from 'styled-components/macro'
import {FaGlobeAfrica as GlobalIcon, FaFistRaised as DominanceIcon, FaDollarSign as PriceIcon } from 'react-icons/fa'
import {useCoinData, useGlobalData} from '../../../hooks/api'
import {MarketSection} from './MarketSection'
import {MarketBarItem} from './MarketBarItem'
import {useFormatPrice} from '../../../hooks/common'
import {formatPercentage} from 'utilities'

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  /* border-top: 1px solid ${(props) => props.theme.colors.neutral[800]}; */
  ${props => props.theme.isMobile && css`display: none;`}
  height: 2.5rem;
  flex-wrap: nowrap;
  max-width: 100%;
  background: ${props => props.theme.colors.neutral[400]};
`

export const MarketBar = ({ ...rest }) => {

  const {coinData, isLoading: coinDataIsLoading} = useCoinData()
  const {formatPrice} = useFormatPrice()
  const {globalData, isLoading: globalDataIsLoading} = useGlobalData()

  if (coinDataIsLoading || globalDataIsLoading) return null

  const spotPrices = coinData.slice(0, 6).map((asset, idx) => {
    return <MarketBarItem key={idx} left={asset.symbol.toUpperCase()} right={formatPrice(asset.spotPrice.value)}/>
  })

  const globalStats = (
    <>
      <MarketBarItem left="MarketCap" right={formatPrice(globalData.marketCap)}/>
      <MarketBarItem left="Coins" right={globalData.activeCoins}/>
    </>
  )

  const dominanceStats = Object.keys(globalData.dominance).slice(0, 3).map((coin, idx) => {
    return <MarketBarItem key={idx} left={coin.toUpperCase()} right={formatPercentage(globalData.dominance[coin])}/>
  })

  return (
    <Wrapper {...rest}>
      <MarketSection title="Spot Prices" icon={PriceIcon}>{spotPrices}</MarketSection>
      <MarketSection title="GlobalStats" icon={GlobalIcon}>{globalStats}</MarketSection>
      <MarketSection title="Dominance" icon={DominanceIcon}>{dominanceStats}</MarketSection>
    </Wrapper>
  )
}
