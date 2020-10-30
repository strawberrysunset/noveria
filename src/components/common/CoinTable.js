import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Table, CryptoLogo, IndicatorColor} from '.'
import {Line} from '.'
import {useTheme} from '../../context'
import {useFormatPrice} from '../../hooks/common'
import {useResize} from '../../utils'
import {formatPercentage} from 'utilities'

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const MarketsTable = styled(Table)`
  width: 100%;
  ${props => !props.theme.isMobile && css`overflow-y: auto;`}
  grid-template-columns: auto 1fr repeat(7, auto);
  ${props => {
    const width = props.width / 16;
    let cssString = ''
    let idx = 0;
    const breakpoints = [85, 75, 65, 55, 45, 35, 30].map(val => val + 5);
    const columnRemovalOrder = [1, 8, 7, 6, 5, 4, 9]
    while(true) {
      if (width < breakpoints[idx]) {
        const columnToRemove = columnRemovalOrder[idx];
        const reducedColumns = (idx + 1 >= 7) ? '' : `repeat(${7 - (idx + 1)}, auto)`
        cssString += `
          grid-template-columns: auto 1fr ${reducedColumns}};
          td:nth-child(10n - ${10 - columnToRemove}), th:nth-child(10n-${10 - columnToRemove}) {
          display: none;
        }`
        idx++
      } else {
        break;
      }
    }
    return css`${cssString}`
  }
}`

const Rank = styled.p`
  text-align: center;
`

const TableItem = ({right, children, ...rest}) => {
  return <div css={right && 'text-align: right'} {...rest}>{children}</div>
}

const HeaderItem = styled(TableItem)`
  color: ${props => props.theme.colors.neutral[1400]};
`

const Sparkline = styled(Line)`
  border: 1px solid ${props => props.theme.colors.neutral[1100]};
  height: 2rem;
  width: 6rem;
`

const headerData = [
  <HeaderItem>Rank</HeaderItem>,
  <HeaderItem>Coin</HeaderItem>,
  <HeaderItem right>Price</HeaderItem>,
  <HeaderItem right>7D</HeaderItem>,
  <HeaderItem right>Mkt Cap</HeaderItem>,
  <HeaderItem right>Volume (24H)</HeaderItem>,
  <HeaderItem right>ATH</HeaderItem>,
  <HeaderItem right>Supply</HeaderItem>,
  <HeaderItem right>Last 7 Days</HeaderItem>,
]

export const CoinTable = ({setIsLoading, page, perPage, coinData, ...rest}) => {
 
  const theme = useTheme()
  const {formatPrice} = useFormatPrice()
  const componentRef = React.useRef(null);
  const {width, isResizing} = useResize(componentRef);

  React.useEffect(() => {
    if(setIsLoading) setIsLoading(isResizing)
  }, [setIsLoading, isResizing])
  
  const rowData = React.useMemo(() => coinData.map((asset, idx) => {
    return [
      <Rank>{page * perPage + idx + 1}</Rank>,
      <CryptoLogo icon={asset.image} name={asset.name} symbol={!theme.isMobile && asset.symbol}/>,
      <TableItem css="margin-left: auto" right>{formatPrice(asset.spotPrice.value)}</TableItem>,
      <TableItem right>
        <IndicatorColor value={asset.spotPrice.change['7d'].percentage}>
          {formatPercentage(asset.spotPrice.change['7d'].percentage)}
        </IndicatorColor>
      </TableItem>,
      <TableItem right>{formatPrice(asset.marketCap.value)}</TableItem>,
      <TableItem right>{formatPrice(asset.totalVolume)}</TableItem>,
      <TableItem right>{formatPrice(asset.ath)}</TableItem>,
      <TableItem right>{Number(asset.supply.toFixed(0)).toLocaleString('en-US')}</TableItem>,
      <Sparkline key={idx} color={
        (asset.spotPrice.change['7d'].percentage >= 0) ? theme.colors.green[100] : theme.colors.red[100] 
      } lineProps={{data : asset.sparkline['7d']}}/>
    ]
  }), [coinData, formatPrice, page, perPage, theme])

  return React.useMemo(() => (
    <TableWrapper ref={componentRef}>
      {<MarketsTable width={width} rowData={rowData} headerData={headerData} {...rest}/>}
    </TableWrapper>
  ), [width, rowData, rest])
}