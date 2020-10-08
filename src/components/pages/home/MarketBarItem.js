import React from 'react'
import styled from 'styled-components/macro'
import {Price, Percentage, IndicatorColor} from '../../common'
import {useFormatPrice} from '../../../hooks/common'

const Wrapper = styled.li`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.4rem;
  white-space: nowrap;
  /* flex-grow: 1; */
`

const Name = styled.p`
  color: ${(props) => props.theme.colors.neutral[1000]};
  text-transform: uppercase;
`

const Icon = styled.img`
  width: 1.25rem;
`

const PriceWrapper = styled.p`
  /* font-weight: 600; */
`

const Change = styled.p`
  color: ${({ isPositive }) => {
    return isPositive
      ? (props) => props.theme.colors.green[100]
      : (props) => props.theme.colors.red[100]
  }};
  /* font-weight: 300; */
`

const PercentageWrapper = styled.div`

`

export const MarketBarItem = ({
  symbol,
  spotPrice,
  image,
  name,
  ...rest
}) => {

  const  {formatPrice} = useFormatPrice()
  return (
    <Wrapper {...rest}>
      <Name>{symbol}</Name>
      <PriceWrapper>{formatPrice(spotPrice.value)}</PriceWrapper>
      {/* <PercentageWrapper>
        <IndicatorColor value={spotPrice.change['24h'].percentage}>
          <Percentage>{spotPrice.change['24h'].percentage}</Percentage>
        </IndicatorColor>
      </PercentageWrapper> */}
    </Wrapper>
  )
}
