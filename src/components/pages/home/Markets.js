import React from 'react'
import styled from 'styled-components/macro'
import { TiChartPie as Icon } from 'react-icons/ti'
import { Card } from '../../common'
import {useCoinData} from '../../../hooks/api'
import {CoinTable, Link} from '../../common'

const Wrapper = styled(Card)`
  height: 100%;
  grid-area: breakdown;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`


const StatsWrapper = styled.div`
  display: flex;
  /* grid-auto-flow: column; */
  /* grid-template-columns: repeat(auto-fit, 1fr); */
  gap: 1.25rem;
  flex-wrap: wrap;
  max-height: 3.25rem;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.colors.neutral[600]};
  max-width: 100%;
  overflow: hidden;
`

const ViewAllCoinsButton = styled(Link)`
  color: ${props => props.theme.colors.neutral[1400]};
  :hover {
    color: ${props => props.theme.colors.neutral[1600]};
  }
  transition: 0.2s;
`


export const Markets = ({ ...rest }) => {

  const {data, isLoading: coinDataIsLoading} = useCoinData()
  const coinData = data.slice(0, 25);
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <Wrapper icon={Icon} isLoading={coinDataIsLoading || isLoading} label="Market Overview" items={<ViewAllCoinsButton to="/markets">View All Coins</ViewAllCoinsButton>} {...rest}>
      {<ContentWrapper>
        <CoinTable  setIsLoading={setIsLoading} coinData={coinData} />
      </ContentWrapper>}
    </Wrapper>
  )
}
