import React from 'react'
import styled from 'styled-components/macro'
import {Table, Card, CryptoLogo} from '../../common'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'
import {useCoinData} from '../../../hooks/api'
import {CardHeaderItems} from './CardHeaderItems'
import {Line} from '../../common'
import {useTheme} from '../../../context'
import {useFormatPrice} from '../../../hooks/common'

const MarketsCard = styled(Card)`
  overflow-x: none;
  max-height: 100%;
  overflow-y: auto;
`

const MarketsTable = styled(Table)`
  overflow-x: hidden;
  max-height: 100%; 
  grid-template-columns:  0px 1fr repeat(1, auto) repeat(5, 0px);
  @media(min-width: 32rem){
    grid-template-columns:  auto 1fr repeat(2, auto) repeat(4, 0px) ;
  }
  @media(min-width: 48rem){
    grid-template-columns:  auto 1fr repeat(3, auto) repeat(3, 0px) ;
  }
  @media(min-width: 54rem){
    grid-template-columns:  auto 1fr repeat(4, auto) repeat(2, 0px) ;
  }
  @media(min-width: 68rem){
    grid-template-columns:  auto 1fr repeat(5, auto) repeat(1, 0px) ;
  }
  @media(min-width: 74rem){
    grid-template-columns:  auto 1fr repeat(7, auto);
  }
  flex-grow: 1;
`


const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`

const Rank = styled.p`
  text-align: center;
`


const TableItem = ({right, children, ...rest}) => {
  return <p css={right && 'text-align: right'} {...rest}>{children}</p>
}

const HeaderItem = styled(TableItem)`
  /* font-weight: 600; */
  color: ${props => props.theme.colors.neutral[1000]};
`

const Sparkline = styled(Line)`
  border: 1px solid ${props => props.theme.colors.neutral[1000]};
  max-height: 1rem;
  max-width: 4rem;
`

const headerData = [
  <HeaderItem>Rank</HeaderItem>,
  <HeaderItem>Asset</HeaderItem>,
  <HeaderItem right>Price</HeaderItem>,
  <HeaderItem right>7D</HeaderItem>,
  <HeaderItem right>Mkt Cap</HeaderItem>,
  <HeaderItem right>Volume (24H)</HeaderItem>,
  <HeaderItem right>ATH</HeaderItem>,
  <HeaderItem right>Supply</HeaderItem>,
  <HeaderItem >Last 7 Days</HeaderItem>,
]

export const Markets = React.memo(({...rest}) => {

  const [page, setPage] = React.useState(1) 
  const perPage = 25;
  const {coinData} = useCoinData({page, perPage})
  const theme = useTheme()
  const {formatPrice} = useFormatPrice()

  const rowData = React.useMemo(() => {
    console.log('RAN')
    return coinData.map((asset, idx) => {
    return [
      <Rank css={`text-align: center;`}>{idx + 1 + (perPage * (page - 1))}</Rank>,
      <CryptoLogo icon={asset.image} name={asset.name} symbol={asset.symbol.toUpperCase()}/>,
      <TableItem css="margin-left: auto" right>{formatPrice(asset.spotPrice.value)}</TableItem>,
      <TableItem right>{asset.spotPrice.change['7d'].percentage.toFixed(2) + '%'}</TableItem>,
      <TableItem right>{formatPrice(asset.marketCap.value)}</TableItem>,
      <TableItem right>{formatPrice(asset.totalVolume)}</TableItem>,
      <TableItem right>{formatPrice(asset.ath)}</TableItem>,
      <TableItem right>{parseFloat(asset.supply.toFixed(0)).toLocaleString('en-US')}</TableItem>,
      <Sparkline color={
        (asset.spotPrice.change['7d'].percentage > 0) ? theme.colors.green[100] : theme.colors.red[100] 
      } data={asset.sparkline['7d']}/>
    ]
  })
}, [coinData, formatPrice, page, theme])

  const headerItems = <CardHeaderItems page={page} setPage={setPage}/>

  return (
    <MarketsCard label="Markets" icon={MarketsIcon} items={headerItems} {...rest}>
      <Content>
        <MarketsTable rowData={rowData} headerData={headerData}/>
      </Content>
    </MarketsCard>
  )
})
