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

const ViewAllCoinsButton = styled(Link)`
  color: ${props => props.theme.colors.neutral[1400]};
  :hover {
    color: ${props => props.theme.colors.neutral[1600]};
  }
  transition: 0.2s;
`

export const Markets = ({ ...rest }) => {

  const {data, isLoading: coinDataIsLoading} = useCoinData()
  const coinData = React.useMemo(() => data.slice(0, 25), [data]);  
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <Wrapper icon={Icon} isLoading={coinDataIsLoading || isLoading} label="Market Overview" items={<ViewAllCoinsButton to="/markets">View All Coins</ViewAllCoinsButton>} {...rest}>
      {<ContentWrapper>
        <CoinTable  setIsLoading={setIsLoading} coinData={coinData} />
      </ContentWrapper>}
    </Wrapper>
  )
}
