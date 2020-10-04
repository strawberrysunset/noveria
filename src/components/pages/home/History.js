import React from 'react'
import styled from 'styled-components/macro'
import { Card, Line, OptionsBar } from '../../common'
import { MdInsertChart as Icon } from 'react-icons/md'
import {usePortfolioHistory} from '../../../hooks/portfolio'
import {useSettings, usePortfolio} from '../../../context'

const Wrapper = styled(Card)``

const historyRangeValues = [
  {
    value: 1,
    displayValue: '1D'
  },
  {
    value: 7,
    displayValue: '7D'
  },
  {
    value: 30,
    displayValue: '30D'
  },
  {
    value: 'max',
    displayValue: 'MAX'
  },
]

const data = [
  [ 1, 7 ],
  [ 2, 1 ],
  [ 3, 4 ],
  [ 4, 1 ],
  [ 5, 1 ]
]

const HistoryGraph = styled(Line)``

const HistoryRangeOptions = styled(OptionsBar)``

export const History = ({ ...rest }) => {

  const {usePortfolioHistory} = usePortfolio()
  const [days, setDays] = React.useState(historyRangeValues[0])
  const {history, isLoading, isError, error} = usePortfolioHistory({days})

  const historyRanges = historyRangeValues.map(({value, displayValue}) => ({
    action : () => setDays(value),
    value: displayValue,
  }))  

  return (
    <Wrapper icon={Icon} label="History" items={<HistoryRangeOptions options={historyRanges}/>} {...rest}>
      <HistoryGraph x={0} y={1} data={isLoading ? history : data}/>
    </Wrapper>
  )
}
