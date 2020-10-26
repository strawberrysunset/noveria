import React from 'react'
import styled from 'styled-components/macro'
import {Card} from '../../common'
import {FaGlobeAfrica as MarketsIcon} from 'react-icons/fa'
import {CardHeaderItems} from './CardHeaderItems'
import {CoinTable} from '../../common/CoinTable'
import {useCoinData} from '../../../hooks/api'

const MarketsCard = styled(Card)`
  flex-grow: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  flex-grow: 1;
  overflow-y: auto;
`

const perPage = 25;

export const Markets = ({...rest}) => {

  const [page, setPage] = React.useState(0)
  const {data, isLoading: coinDataIsLoading} = useCoinData()
  const startIndex = page * perPage;
  const coinData = data.slice(startIndex, startIndex + perPage)
  console.log({coinData})
  const [isLoading, setIsLoading] = React.useState(true)

  return React.useMemo(() => (
    <MarketsCard label="Markets" isLoading={coinDataIsLoading || isLoading} icon={MarketsIcon} items={<CardHeaderItems page={page} setPage={setPage} totalPages={Math.floor(data.length / perPage)}/>} {...rest}>
      <Content>
        {<CoinTable setIsLoading={setIsLoading} coinData={coinData} perPage={perPage} page={page} />}
      </Content>
    </MarketsCard>
  ), [page, coinData, coinDataIsLoading, isLoading, setIsLoading, setPage, data.length, rest])
}
