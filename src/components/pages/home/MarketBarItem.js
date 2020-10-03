import React from 'react'
import styled from 'styled-components/macro'
import {Price, Percentage, IndicatorColor} from '../../common'

const Wrapper = styled.li`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.4rem;
  white-space: nowrap;
  font-size: ${(props) => props.theme.typeScale.caption};
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
  font-weight: 600;
`

const Change = styled.p`
  color: ${({ isPositive }) => {
    return isPositive
      ? (props) => props.theme.colors.green[100]
      : (props) => props.theme.colors.red[100]
  }};
  font-weight: 300;
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
  return (
    <Wrapper {...rest}>
      <Name>{symbol}</Name>
      <PriceWrapper><Price>{spotPrice.value}</Price></PriceWrapper>
      <PercentageWrapper>
        <IndicatorColor value={spotPrice.change['24h'].percentage}>
          <Percentage>{spotPrice.change['24h'].percentage}</Percentage>
        </IndicatorColor>
      </PercentageWrapper>
    </Wrapper>
  )
}
