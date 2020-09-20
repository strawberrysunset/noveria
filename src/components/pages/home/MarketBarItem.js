import React from 'react'
import styled from 'styled-components/macro'
import {Currency, Percentage, IndicatorColor} from '../../common'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  white-space: nowrap;
  font-size: ${(props) => props.theme.typeScale.bodySmall};
`

const Name = styled.ul`
  color: ${(props) => props.theme.colors.neutral[1000]};
  text-transform: uppercase;
`
const Price = styled.li`
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

export const MarketBarItem = ({
  symbol,
  current_price: price,
  price_change_percentage_24h: change,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Name>{symbol}</Name>
      <Price><Currency>{price}</Currency></Price>
      <IndicatorColor value={change}>(<Percentage>{change}</Percentage>)</IndicatorColor>
    </Wrapper>
  )
}
