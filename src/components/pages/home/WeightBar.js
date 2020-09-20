import React from 'react'
import styled from 'styled-components'
import { usePortfolio } from '../../../context/portfolio'
import { transparentize } from 'polished'
import { BiRestaurant } from 'react-icons/bi'

const Wrapper = styled.div`
  height: 1rem;
  display: flex;
  align-items: stretch;
  background: ${props => props.theme.colors.neutral[300]};
`

const Item = styled.div`
  width: ${({ weight }) => '50px'};
  background: ${({ color }) => transparentize(0.8, color)};
`

export const WeightBar = ({...rest}) => {

  const [{coins}] = usePortfolio()

  return (
    <Wrapper {...rest}>
      {coins.map((coin) => {
        return <Item color={coin.color} weight={coin.weight} />
      })}
    </Wrapper>
  )
}
