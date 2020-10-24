import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Card, Line, OptionsBar } from '../../common'
import { MdInsertChart as Icon } from 'react-icons/md'
import {usePortfolio, } from '../../../context'
import {usePortfolioHistory} from '../../../hooks/portfolio'
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
  margin: 1rem 0;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  flex-grow: 1;
`

const OptionItem = styled.div`
  ${props => props.selected ? css`
    color: ${props.theme.colors.neutral[1500]};
  ` : css`color: ${props.theme.colors.neutral[1200]};`
  }
  :hover {
    color: ${props => props.theme.colors.neutral[1600]};
    cursor: pointer;
  }
  transition: 0.1s ease;
`

export const History = ({ ...rest }) => {

  const {isEmpty, isError} = usePortfolio()
  const {history, setHistoryDays, isLoading} = usePortfolioHistory(1)

  const headerItems = (
    <OptionsBar render={({selected, setSelected}) => {
      return historyRangeValues.map(({value, displayValue}, idx) => {
        return <OptionItem key={idx} selected={selected === idx} onClick={() => {
          setHistoryDays(value)
          setSelected(idx)
        }}>{displayValue}</OptionItem>
      })
    }}/>
  )

  const lineProps = {
    x:0, 
    y:1,
    data: history
  }

  return (
    <Wrapper 
      icon={Icon} 
      isLoading={isLoading}
      error={isError && "Unable to fetch history."} 
      message={isEmpty && "Add assets to your portfolio to see its history."} 
      label="Performance" 
      items={headerItems}
      {...rest}>
      <ContentWrapper>
        <Text>Top Performing Asset</Text>
        <Text>Change, 1d, 24h, 7d, 30d, max</Text>
        <Text>WeightBar</Text>
        {/* {isLoading || <HistoryGraph showLabels="true" lineProps={lineProps}/>} */}
      </ContentWrapper>
    </Wrapper>
  )
}
