import React from 'react'
import styled from 'styled-components/macro'
import {Table, Card, Price} from '../../common'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'
import {AiOutlineReload as SpinnerIcon} from 'react-icons/ai'
import {useCoinData} from '../../../hooks/api'
import {HeaderItems} from './HeaderItems'
import {InfiniteSpin} from '../../animators'

const MarketsCard = styled(Card)`
  overflow-x: none;
  max-height: 100%;
  overflow-y: auto;
`

const MarketsTable = styled(Table)`
  max-height: 100%; 
  /* grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr)); */
  grid-template-columns:  repeat(9, auto);
  /* @media(min-width: 48rem){
    grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
  } */
  flex-grow: 1;
  
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`

const Rank = styled.p``

const Logo = ({icon, children}) => {
  return (
    <LogoWrapper>
      <Icon src={icon}/>
      {children}
    </LogoWrapper>
  )
}

export const Markets = ({...rest}) => {

  const [page, setPage] = React.useState(1)
  const [perPage, setPerPage] = React.useState(50)
  const {coinData} = useCoinData({page, perPage})

  const headerData = ['Rank', 'Asset', 'Price', '1H', '24H', '7D', '24H Volume', 'Mkt Cap', 'Last 7 Days']

  const rowData = coinData.map((asset, idx) => {
    return [
      <Rank>{idx + 1 + (perPage * (page - 1))}</Rank>,
      <Logo icon={asset.image}>{asset.name}</Logo>,
      <Price>{asset.spotPrice.value}</Price>,
      <Price>{asset.supply}</Price>,
      <Price>{asset.marketCap.value}</Price>,
      <Price>{asset.spotPrice.value}</Price>,
      <Price>{asset.spotPrice.value}</Price>,
      <Price>{asset.spotPrice.valuee}</Price>,
      <Price>{asset.spotPrice.value}</Price>
    ]
  })

  const HeaderItems = React.useMemo(() => () => <HeaderItems page={page} setPage={setPage}/>, [page, setPage])

  return (
    <MarketsCard label="Markets" icon={MarketsIcon} items={HeaderItems} {...rest}>
      <Content>
        <MarketsTable rowData={rowData} headerData={headerData}/>
      </Content>
    </MarketsCard>
  )
}
