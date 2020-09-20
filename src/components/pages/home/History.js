import React from 'react'
import styled from 'styled-components/macro'
import { Card, Line, OptionsBar } from '../../common'
import { usePortfolio, useUser } from '../../../context'
import { MdInsertChart as Icon } from 'react-icons/md'
import {getCoinHistory } from '../../../context/api/lib'

const Wrapper = styled(Card)`
  position: relative;
  width: 100%;
  height: 200px;
`
const historyRangeValues = [
  {
    value: 1,
    formatted: '1D'
  },
  {
    value: 7,
    formatted: '7D'
  },
  {
    value: 30,
    formatted: '30D'
  },
  {
    value: 'max',
    formatted: 'MAX'
  },
]

const data = [
  { date: 1, price: 2 },
  { date: 2, price: 3 },
  { date: 3, price: 5 },
  { date: 4, price: 4 },
  { date: 5, price: 7 },
]

const HistoryGraph = styled(Line)``

const HistoryRangeOptions = styled(OptionsBar)`
  /* position: absolute;
  top: 1.5rem;
  right: 1.5rem; */
`

export const History = ({ ...rest }) => {

  const [{history}] = usePortfolio()
  console.log(history)
  // const [user, userDispatch] = useUser()

  const [range, setRange] = React.useState(historyRangeValues[0])
  const [data, setData] = React.useState([])

  const historyRanges = historyRangeValues.map(({value, formatted}) => ({
    value: formatted,
    action : () => setRange(value)
  }))

  // React.useEffect(() => {
  //
   
  // }, [range])

  return (
    <Wrapper icon={Icon} label="History" items={<HistoryRangeOptions options={historyRanges} />} {...rest}>
      <HistoryGraph x="date" y="price" data={history}/>
    </Wrapper>
  )
}
