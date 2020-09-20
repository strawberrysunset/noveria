import React from 'react'
import styled from 'styled-components/macro'
import {useAPI} from '../../../context'
import {Currency} from '../../common'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  margin-left: auto;
`
const Item = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
`

export const HeaderItems = () => {
  const [{data, fetching}] = useAPI()

  if (fetching) return null

  return (
    <Wrapper>
      <Item>Coins: {data.global.active_cryptocurrencies}</Item>
      <Item>Markets: {data.global.markets}</Item>
      <Item>Total Market Cap: <Currency>{data.global.total_market_cap}</Currency></Item>
      {/* <Item>Total Volume: {data.global.data.total_volume}</Item>
      <Item>Dominance: BTC {data.global.data.dominance} </Item> */}
    </Wrapper>
  )
}