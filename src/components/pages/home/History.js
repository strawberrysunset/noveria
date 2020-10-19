import React, { useEffect } from 'react'
import styled, {css} from 'styled-components/macro'
import { Card, Line, OptionsBar, Spinner } from '../../common'
import { MdInsertChart as Icon } from 'react-icons/md'
import {usePortfolioHistory} from '../../../hooks/portfolio'
import {useSettings, usePortfolio} from '../../../context'

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

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

const Text = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
`
const Error = styled.p`
  margin: auto;
  color: ${props => props.theme.colors.red[100]};
`

const HistoryGraph = styled(Line)`
  width: 100%;
  height: 100%;
  ${props => props.theme.isMobile && css`
    min-height: 12rem;
  `}
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  /* padding: 4rem 2rem; */
`

const HistoryRangeOptions = styled(OptionsBar)``

export const History = React.memo(({ ...rest }) => {

  const {assets, isEmpty, history, isLoading, isError, setHistoryDays} = usePortfolio()

  React.useEffect(() => {
    setHistoryDays(historyRangeValues[0].value)
  }, [])

  const historyRanges = historyRangeValues.map(({value, displayValue}) => ({
    action : () => setHistoryDays(value),
    value: displayValue,
  }))  

  const lineProps = {
    x:0, 
    y:1,
    data //: history || data
  }

  return (
    <Wrapper 
      icon={Icon} 
      loading={true}
      error={isError && "Unable to fetch history."} 
      message={isEmpty && "Add assets to your portfolio to see its history."} 
      label="History" items={<HistoryRangeOptions 
      options={historyRanges}
    />} {...rest}>
      <ContentWrapper>
        <HistoryGraph showLabels="true" lineProps={lineProps}/>
      </ContentWrapper>
    </Wrapper>
  )
})
