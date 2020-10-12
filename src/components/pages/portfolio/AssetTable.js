import React from 'react'
import styled, {css} from 'styled-components'
import {Card, Table, IndicatorColor, CryptoLogo} from '../../common'
import {MdPieChart as PieIcon} from 'react-icons/md'
import {AssetTablePlaceholder} from './AssetTablePlaceholder'
import {MdRemoveCircle} from 'react-icons/md'
import {usePortfolio} from '../../../context'
import {useFormatPrice} from '../../../hooks/common'
import {useIsMobile} from 'utilities'

const AssetTableCard = styled(Card)`
  overflow-x: none;
  max-height: 100%;
  overflow-y: auto;
`

const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 100%;
  min-width: 100%;
  overflow-y: auto;
`

const Remove = styled(MdRemoveCircle)`
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.5rem;
 
  :hover {
    color: ${(props) => props.theme.colors.red[100]};
    cursor: pointer;
  }
  transition: 0.15s ease;
`

const RemoveAll = styled.p`
  :hover {
    color: ${(props) => props.theme.colors.red[100]};
    cursor: pointer;
  }
`

const AssetsTable = styled(Table)`
  
  width: 100%;
  overflow-y: auto;
  grid-template-columns: auto 1fr repeat(6, auto);

  @media (max-width: 102rem) {
    grid-template-columns: auto 1fr repeat(5, auto);
    td:nth-child(8n - 1), th:nth-child(8n-1) {
      display: none;
    }
  }
  @media (max-width: 91rem) {
    grid-template-columns: auto 1fr repeat(4, auto);
    td:nth-child(8n - 2), th:nth-child(8n-2) {
      display: none;
    }
  }
  @media (max-width: 77rem) {
    grid-template-columns: auto 1fr repeat(3, auto);
    td:nth-child(8n - 3), th:nth-child(8n-3) {
      display: none;
    }
  }
  
  ${props => {
      if (!props.theme.isMobile){
        return css`
          @media (max-width: 70rem) {
          grid-template-columns: auto 1fr repeat(2, auto);
          td:nth-child(8n - 4), th:nth-child(8n-4) {
            display: none;
          }
          }
          @media(max-width: 55rem){
            grid-template-columns: auto 1fr auto;
            td:nth-child(8n - 5), th:nth-child(8n-5) {
              display: none;
            }
          }
        `
      }

      if (props.theme.isMobile){
        return css`
          @media (max-width: 41rem) {
          grid-template-columns: auto 1fr repeat(2, auto);
          td:nth-child(8n - 4), th:nth-child(8n-4) {
            display: none;
          }
          }
          @media(max-width: 30rem){
            grid-template-columns: auto 1fr auto;
            td:nth-child(8n - 5), th:nth-child(8n-5) {
              display: none;
            }
          }
        `
      }
    }
  }
`

const TableItem = ({right, children, ...rest}) => {
  return <div css={right && 'text-align: right'} {...rest}>{children}</div>
}

const HeaderItem = styled(TableItem)`
  color: ${props => props.theme.colors.neutral[1000]};
`

const Placeholder = styled(AssetTablePlaceholder)`
  flex-grow: 1;
  margin-bottom: 2rem;
`

const headerData = [
  <HeaderItem>Asset</HeaderItem>,
  <HeaderItem>Amount</HeaderItem>,
  <HeaderItem right>Asset Value (Fiat)</HeaderItem>,
  <HeaderItem right>Asset Value (BTC)</HeaderItem>,
  <HeaderItem right>Spot Price</HeaderItem>,
  <HeaderItem right>Change (24H)</HeaderItem>,
  <HeaderItem right>Portfolio Weight</HeaderItem>,
  <HeaderItem right>Remove</HeaderItem>
]

export const AssetTable = ({ ...rest }) => {

  const {formatPrice} = useFormatPrice()
  const isMobile = useIsMobile(768)
  const portfolio = usePortfolio()
  const handleRemoveAll = () => portfolio.updatePortfolio({ type: 'remove_all_assets' });
  
  const cardItems = <RemoveAll onClick={handleRemoveAll}>Remove All</RemoveAll>
  const tableContent = React.useMemo(getTableContent, [portfolio.assets, isMobile])

  return (
    <AssetTableCard label="Portfolio" icon={PieIcon} items={cardItems} {...rest}>
      <Content>
        {tableContent}
      </Content>
    </AssetTableCard>
  )

  function getTableContent () {

    if (portfolio.assets.length === 0){
      return <Placeholder />
    }
    if (portfolio.isError) {
      return <p>{portfolio.error.message}</p>
    }

    const rowData = portfolio.assets.map((asset) => {

      const formattedPrice =formatPrice(asset.price);
      const formattedPriceBTC = formatPrice(asset.priceBTC, 'btc')
      const formattedSpotPrice = formatPrice(asset.spotPrice.value)
      const formattedSpotPriceChange24H = asset.spotPrice.change['24h'].percentage.toFixed(2) + '%'
      const formattedWeight = (asset.weight * 100).toFixed(2) + '%'
      
      const handleRemove = () => portfolio.updatePortfolio({ type: 'remove_asset', uniqueID: asset.uniqueID })
      const bigLogo = <CryptoLogo css="margin-right: 1rem" icon={asset.image} name={asset.name} symbol={asset.symbol.toUpperCase()}/>;
      const smallLogo = <CryptoLogo icon={asset.image} name={asset.symbol.toUpperCase()} symbol={''}/>
      const logo = isMobile ? smallLogo : bigLogo
     
      return [
        <TableItem>{logo}</TableItem>,
        <TableItem css="margin-right: auto">{asset.amount}</TableItem>,
        <TableItem css="margin-left: auto" right>{formattedPrice}</TableItem>,
        <TableItem right>{formattedPriceBTC}</TableItem>,
        <TableItem right>{formattedSpotPrice}</TableItem>,
        <TableItem right>
          <IndicatorColor value={asset.spotPrice.change['24h'].percentage}>
            {formattedSpotPriceChange24H}
          </IndicatorColor>
        </TableItem>,
        <TableItem right>{formattedWeight}</TableItem>,
        <TableItem css="text-align: center">
          <Remove onClick={handleRemove}/>
        </TableItem>,
      ]
    })

    return (
      <AssetsTable headerData={headerData} rowData={rowData} />
    )

  }

}
