import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Card } from '../../common'
import { MdInsertChart as Icon } from 'react-icons/md'
import {usePortfolio, useTheme} from '../../../context'
import {CryptoCard} from './CryptoCard'
import {OptionsBar, IndicatorColor} from '../../common'
import {getAssetStatistics} from './getAssetStatistics'
import {CgArrowUpR} from 'react-icons/cg'
import {formatPercentage} from 'utilities'
import {useFormatPrice} from '../../../hooks/common'


const Value = styled.p`
  font-weight: 600;
`

const Wrapper = styled(Card)`
  overflow-x: none;
`

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  display: grid;
 
  grid-template-columns: repeat(2, minmax(17rem, 1fr));
  /* grid-template-columns: 1fr; */
  @media(max-width: 90rem) {
    overflow-y: none;
    grid-template-columns: 1fr;
  }

`


const Option = styled.p`
  color: ${props => props.selected ? props.theme.colors.neutral[1600] :  props.theme.colors.neutral[1200] };
  :hover {
    color: ${props => props.theme.colors.neutral[1400]} ;
    cursor: pointer;
  }
`

const timeRangeOptions = [
  {
    value: 1,
    displayValue: '1H',
  },
  {
    value: 1,
    displayValue: '1D',
  },
  {
    value: 7,
    displayValue: '7D',
  },
  {
    value: 365,
    displayValue: '1Y',
  },
  {
    value: 'max',
    displayValue: 'MAX',
  },

]

export const Statistics = ({ ...rest }) => {

  const {assets, isEmpty, isError, isLoading} = usePortfolio()
  const theme = useTheme()
  const {formatPrice} = useFormatPrice()


  const timeRangeOptionsBar = <OptionsBar render={({selected, setSelected}) => {
    return timeRangeOptions.map(({displayValue, value}, idx) => {
      return <Option selected={selected === idx} onClick={() => {
        setSelected(idx)
        // set value in portfolio here
      }}>{displayValue}</Option>
    })
  }}/>
  
  const stats = getAssetStatistics({assets})
 
  return (
    <Wrapper 
      icon={Icon} 
      isLoading={isLoading}
      error={isError && "Error: Unable to fetch statistics."} 
      message={isEmpty && "Add assets to your portfolio to see statistics."} 
      label="Statistics (24H)" 
      transparentBackground="true"
      // items={timeRangeOptionsBar}
      {...rest}>
      <ContentWrapper> 
        <CryptoCard 
          label="Best Performing Asset"
          labelIcon={<CgArrowUpR color={theme.colors.green[100]}/>}
          asset={stats.bestPerformingAsset}
          value={(stats.bestPerformingAsset &&
            <IndicatorColor isPositive={stats.bestPerformingAsset.change['24h'].percentage > 0}>
              <Value>{formatPercentage(stats.bestPerformingAsset.change['24h'].percentage)}</Value>
            </IndicatorColor>
          )}
        />
          <CryptoCard 
          label="Worst Performing Asset"
          labelIcon={<CgArrowUpR css="transform: rotate(180deg);" color={theme.colors.red[100]}/>}
          asset={stats.worstPerformingAsset}
          value={(stats.worstPerformingAsset &&
            <IndicatorColor isPositive={stats.worstPerformingAsset.change['24h'].percentage > 0}>
              <Value>{formatPercentage(stats.worstPerformingAsset.change['24h'].percentage)}</Value>
            </IndicatorColor>
          )}
        />
          <CryptoCard 
          label="Highest Value Asset"
          labelIcon={<CgArrowUpR color={theme.colors.green[100]}/>}
          asset={stats.highestValueAsset}
          value={(stats.highestValueAsset &&
            <IndicatorColor isPositive={stats.highestValueAsset.price > 0}>
              <Value>{formatPrice(stats.highestValueAsset.price)}</Value>
            </IndicatorColor>
          )}
        />
        <CryptoCard 
          label="Lowest Value Asset"
          labelIcon={<CgArrowUpR css="transform: rotate(180deg);" color={theme.colors.red[100]}/>}
          asset={stats.lowestValueAsset}
          value={(stats.lowestValueAsset &&
            <IndicatorColor isPositive={stats.lowestValueAsset.price > 0}>
              <Value>{formatPrice(stats.lowestValueAsset.price)}</Value>
            </IndicatorColor>
          )}
        />
      </ContentWrapper>
    </Wrapper>
  )
}
