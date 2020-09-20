import React from 'react'
import styled from 'styled-components/macro'
import {Table, Card, Currency} from '../../common'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'
import {useAPI} from '../../../context'
import {HeaderItems} from './HeaderItems'

// const Wrapper = styled.div`
//   width: 100%;
//   background: ${(props) => props.theme.colors.neutral[300]};
//   > * {
//     background: ${(props) => props.theme.colors.neutral[100]};
//   }
// `
const MarketsCard = styled(Card)`
  overflow-y: auto;
`

const MarketsTable = styled(Table)`
  /* grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr)); */
  grid-template-columns:  repeat(8, auto);
  /* @media(min-width: 48rem){
    grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
  } */
`

const LogoWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.75rem;
  align-items: center;
`
const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`

const Logo = ({icon, children}) => {
  return (
    <LogoWrapper>
      <Icon src={icon}/>
      {children}
    </LogoWrapper>
  )
}

export const Markets = ({...rest}) => {

  const [{ data }] = useAPI()

  const headerData = ['Coin', 'Price', '1H', '24H', '7D', '24H Volume', 'Mkt Cap', 'Last 7 Days']

  const rowData = data.coinList.slice(0, 10).map((coin, idx) => {
    return [
      <Logo icon={coin.image}>{coin.name}</Logo>,
      <Currency>{coin.current_price}</Currency>,
      <Currency>{coin.circulating_supply}</Currency>,
      <Currency>{coin.market_cap}</Currency>,
      <Currency>{coin.current_price}</Currency>,
      <Currency>{coin.current_price}</Currency>,
      <Currency>{coin.current_price}</Currency>,
      <Currency>{coin.current_price}</Currency>
    ]
  })

  // const headerItems = data.globalData.map()
  //   <HeaderItem
  // )

  return (
    <MarketsCard label="Markets" icon={MarketsIcon} items={<HeaderItems/>}>
      <MarketsTable rowData={rowData} headerData={headerData} />
    </MarketsCard>
  )
}
