import React from 'react'
import styled, {css} from 'styled-components'
import {Card, Table, Price, Percentage} from '../../common'
import {MdPieChart as PieIcon} from 'react-icons/md'
import {AssetTablePlaceholder} from './AssetTablePlaceholder'
import {MdRemoveCircle} from 'react-icons/md'
import {usePortfolio} from '../../../context'
import {useFormatPrice} from '../../../hooks/common'

const AssetTableCard = styled(Card)`
  
`

const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${props => props.isMobile && css`padding-bottom: 2rem;`}
  ${props => props.isMobile && css`overflow: auto;`}
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
  grid-template-columns: min-content 1fr repeat(3, 0px) 1fr;
  width: 100%;
  ${props => !props.isMobile && css`overflow: auto;`}
  

  td:not(:first-child),
  th:not(:first-child) {
    text-align: left;
    justify-content: center;
  }

  @media (min-width: 40rem) {
    grid-template-columns: repeat(3, auto) repeat(2, 0px) auto;
  }
  @media (min-width: 60rem) {
    grid-template-columns: repeat(4, 1fr) repeat(1, 0px) 1fr;
  }
  @media (min-width: 74rem) {
    grid-template-columns: repeat(6, auto);
  }
`


const LogoAssetTableCard = styled.div`
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
    <LogoAssetTableCard>
      <Icon src={icon}/>
      {children}
    </LogoAssetTableCard>
  )
}

const Placeholder = styled(AssetTablePlaceholder)`
  flex-grow: 1;
  margin-bottom: 2rem;
`


const headerData = [
  'Asset',
  'Amount',
  'Value (Fiat)',
  'Value (BTC)',
  'Weight',
  'Remove',
]

export const AssetTable = ({ ...rest }) => {

  const {
    assets, 
    total, 
    isLoading, 
    isFetching, 
    isError, 
    error, 
    updatePortfolio
  } = usePortfolio()
  const {formatPrice} = useFormatPrice()

  // const [ass, setAss] = React.useState([])
  // const [tota, setTota] = React.useState(0)


  // React.useEffect(() => {
  //   if (assets) setAss(assets)
  //   if (total) setTota(total)
  // }, [isFetching])

  if (isError) {
    return <p>{error.message}</p>
  }
  
  const removeButton = (
    <RemoveAll onClick={() => updatePortfolio({ type: 'remove_all_assets' })}>
        Remove All
    </RemoveAll>
  )

  return (
    <AssetTableCard label="Portfolio" icon={PieIcon} items={removeButton} {...rest}>
      <Content>
        {(isLoading ? [] : assets.length) === 0 
          ? <Placeholder /> :
         <AssetsTable headerData={headerData} rowData={isLoading ? [] : assets.map(asset => {
            return [
              <Logo icon={asset.image}><p>{asset.name}</p></Logo>,
              asset.amount,
              formatPrice(asset.price),
              formatPrice(asset.priceBTC, 'btc'),
              <Percentage>{asset.price / total * 100}</Percentage>,
              <Remove
                onClick={() => updatePortfolio({ type: 'remove_asset', id: asset.uniqueID })}
              />,
            ]
          })} />
        }
      </Content>
    </AssetTableCard>
  )
}
