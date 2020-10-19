import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Table, Card, CryptoLogo, IndicatorColor} from '../../common'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'
import {useCoinData} from '../../../hooks/api'
import {CardHeaderItems} from './CardHeaderItems'
import {Line} from '../../common'
import {useTheme} from '../../../context'
import {useFormatPrice} from '../../../hooks/common'

const MarketsCard = styled(Card)`
  
`

const hideColumns = (arr) => {
  return `
    th:nth-child(7n - 6), td:nth-child(7n - 6) { 
      display: none;
    }
    grid-template-columns: repeat(6, auto);
  `
}

const MarketsTable = styled(Table)`
  width: 100%;
  ${props => !props.theme.isMobile && css`overflow-y: auto;`}
  
  grid-template-columns: auto 1fr repeat(7, auto);

  @media (max-width: 85rem) {
    grid-template-columns: auto 1fr repeat(6, auto);
    td:nth-child(10n - 1), th:nth-child(10n-1) {
      display: none;
    }
  }
  @media (max-width: 76rem) {
    grid-template-columns: auto 1fr repeat(5, auto);
    td:nth-child(10n - 2), th:nth-child(10n-2) {
      display: none;
    }
  }
  @media (max-width: 68rem) {
    grid-template-columns: auto 1fr repeat(4, auto);
    td:nth-child(10n - 3), th:nth-child(10n-3) {
      display: none;
    }
  }
  @media (max-width: 59rem) {
    grid-template-columns: auto 1fr repeat(3, auto);
    td:nth-child(10n - 4), th:nth-child(10n-4) {
      display: none;
    }
  }
  @media (max-width: 42rem) {
    grid-template-columns: auto 1fr repeat(2, auto);
    td:nth-child(10n - 5), th:nth-child(10n-5) {
      display: none;
    }
  }
  @media (max-width: 32rem) {
    grid-template-columns: auto 1fr auto;
    td:nth-child(10n - 6), th:nth-child(10n-6) {
      display: none;
    }
  }
  @media (max-width: 25rem) {
    grid-template-columns: 1fr auto;
    td:nth-child(10n - 9), th:nth-child(10n-9) {
      display: none;
    }
  }
  
  ${props => {
      if (!props.theme.isMobile){
        return css`
          @media (max-width: 20rem) {
          grid-template-columns: auto 1fr repeat(3, auto);
          td:nth-child(10n - 4), th:nth-child(10n-4) {
            display: none;
          }
          }
          @media(max-width: 20rem){
            grid-template-columns: auto 1fr repeat(2, auto);
            td:nth-child(10n - 5), th:nth-child(10n-5) {
              display: none;
            }
          }
        `
      }
      if (props.theme.isMobile){
        return css`
          @media (max-width: 5rem) {
          grid-template-columns: auto 1fr repeat(1, auto) auto;
          td:nth-child(10n - 4), th:nth-child(10n-4) {
            display: none;
          }
          }
          @media(max-width: 5rem){
            grid-template-columns: auto 1fr auto;
            td:nth-child(10n - 5), th:nth-child(10n-5) {
              display: none;
            }
          }
        `
      }
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  flex-grow: 1;
  overflow-y: auto;
`

const Rank = styled.p`
  text-align: center;
`

const TableItem = ({right, children, ...rest}) => {
  return <p css={right && 'text-align: right'} {...rest}>{children}</p>
}

const HeaderItem = styled(TableItem)`
  color: ${props => props.theme.colors.neutral[1400]};
`

const Sparkline = styled(Line)`
  border: 1px solid ${props => props.theme.colors.neutral[1000]};
  height: 2rem;
  width: 6rem;
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
  <HeaderItem right>Last 7 Days</HeaderItem>,
]

export const Markets = React.memo(({...rest}) => {

  const [page, setPage] = React.useState(1) 
  const perPage = 25;
  const {coinData, isLoading} = useCoinData({page, perPage})
  const theme = useTheme()
  const {formatPrice} = useFormatPrice()

  const rowData = coinData.map((asset, idx) => {
    return [
      <Rank>{idx + 1 + (perPage * (page - 1))}</Rank>,
      <CryptoLogo icon={asset.image} name={asset.name} symbol={asset.symbol.toUpperCase()}/>,
      <TableItem css="margin-left: auto" right>{formatPrice(asset.spotPrice.value)}</TableItem>,
      <TableItem right>
        <IndicatorColor value={asset.spotPrice.change['7d'].percentage}>
          {asset.spotPrice.change['7d'].percentage.toFixed(2) + '%'}
        </IndicatorColor>
      </TableItem>,
      <TableItem right>{formatPrice(asset.marketCap.value)}</TableItem>,
      <TableItem right>{formatPrice(asset.totalVolume)}</TableItem>,
      <TableItem right>{formatPrice(asset.ath)}</TableItem>,
      <TableItem right>{Number(asset.supply.toFixed(0)).toLocaleString('en-US')}</TableItem>,
      <Sparkline color={
        (asset.spotPrice.change['7d'].percentage >= 0) ? theme.colors.green[100] : theme.colors.red[100] 
      } lineProps={{data: asset.sparkline['7d'] || [[0, 0],[1, 0]]}}/>
    ]
  })

  const headerItems = <CardHeaderItems page={page} setPage={setPage}/>

  return (
    <MarketsCard label="Markets" loading={isLoading} icon={MarketsIcon} items={headerItems} {...rest}>
      <Content>
        <MarketsTable rowData={rowData} headerData={headerData}/>
      </Content>
    </MarketsCard>
  )
})
