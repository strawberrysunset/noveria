import React from 'react'
import styled from 'styled-components'
import {Card, Table, Currency, Percentage} from '../../common'
import {MdPieChart as PieIcon} from 'react-icons/md'
import {CoinTablePlaceholder} from './CoinTablePlaceholder'
import {MdRemoveCircle} from 'react-icons/md'
import {usePortfolio, useAPI} from '../../../context'

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  position: relative;
 
  overflow-y: auto;
  height: 100%;
`

const Remove = styled(MdRemoveCircle)`
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.5rem;
 
  :hover {
    color: ${(props) => props.theme.colors.red[100]};
  }
  transition: 0.15s ease;
`

const RemoveAll = styled.p`
  :hover {
    color: ${(props) => props.theme.colors.red[100]};
    cursor: pointer;
  }
`

const CoinsTable = styled(Table)`
  grid-template-columns: min-content 1fr repeat(3, 0px) 1fr;
  min-width: 100%;
  overflow-y: auto;

  td:not(:first-child),
  th:not(:first-child) {
    text-align: center;
    justify-content: center;
  }

  @media (min-width: 40rem) {
    grid-template-columns: repeat(3, auto) repeat(2, 0px) auto;
  }
  @media (min-width: 60rem) {
    grid-template-columns: repeat(4, 1fr) repeat(1, 0px) 1fr;
  }
  @media (min-width: 74rem) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const headerData = [
  'Coin',
  'Amount',
  'Value (Fiat)',
  'Value (BTC)',
  'Weight',
  'Remove',
]

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



export const CoinTable = ({ ...rest }) => {

  const [portfolio, portfolioDispatch] = usePortfolio()
  const [{data}] = useAPI()

  const rowData = portfolio.coins.map(coin => {
    console.log({coin})
    return [
      <Logo icon={coin.image}>{coin.name}</Logo>,
      coin.amount,
      <Currency>{coin.value}</Currency>,
      <Currency currency="btc">{coin.value}</Currency>,
      <Percentage>{coin.weight * 100}</Percentage>,
      <Remove
        onClick={() => portfolioDispatch({ type: 'remove_coin', id: coin.uniqueID })}
      />,
    ]
  })

  const removeButton = (
    <RemoveAll onClick={() => portfolioDispatch({ type: 'remove_all_coins' })}>
        Remove All
    </RemoveAll>
  )

  return (
    <Wrapper label="Portfolio" icon={PieIcon} items={removeButton} {...rest}>
      <CoinsTable headerData={headerData} rowData={rowData} />
      {portfolio.coins.length === 0 && <CoinTablePlaceholder />}
    </Wrapper>
  )
}
