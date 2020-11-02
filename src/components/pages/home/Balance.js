import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Card, Price, IndicatorColor} from '../../common'
import {MdAccountBalanceWallet as Icon, MdArrowDropUp as Arrow } from 'react-icons/md'
import {motion} from 'framer-motion'
import {usePortfolio, useTheme} from '../../../context'
import {useFormatPrice} from '../../../hooks/misc'
import {transparentize} from 'polished'
import {formatPercentage} from 'utilities'
import {StatCard} from './StatCard'
import {mix, lighten, darken} from 'polished'
import {getAssetStatistics} from './getAssetStatistics'


const StyledCard = styled(Card)`
  flex-grow: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 100%;
  background-color: ${props => props.theme.colors.neutral[600]};
  ${props => props.theme.isMobile && css`
    overflow-y: auto;
  `}
`

const Total = styled(motion.p)`
  font-size: ${(props) => props.theme.typeScale.h2};
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0.25rem 0;
  text-shadow: 0rem 0rem 1.5rem ${props => transparentize(0.8, props.theme.colors.neutral[1400])};
`

const AltTotal = styled.div`
  font-size: ${(props) => props.theme.typeScale.bodySmall};
  color: ${(props) => props.theme.colors.neutral[1400]};
  margin-bottom: 0.5rem;
`

const IndicatorValue = styled.p`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.typeScale.body};
  margin-bottom: 0.25rem;
  font-weight: bold;
  margin-left: -0.5rem;
  margin-right: 1rem;
  
`

const IndicatorArrow = styled(Arrow)`
  height: 2.75rem;
  width: 2.75rem;
  ${props => {
    if (props.value >= 0) {
      return css`
        transform: rotate(0deg);
        margin-bottom: 0.30rem;
      `
    }
    return css`
      transform: rotate(180deg);
      margin-bottom: 0.7rem;
    ` 
  }};

`

const Color = styled(IndicatorColor)`
  display: flex;
  align-items: center;
  margin-bottom: -1rem;
  text-shadow: 0rem 0rem 1.5rem ${props => transparentize(0.5, props.theme.colors.green[100])};
`

const Label = styled.div`
  min-height: min-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 3rem 0;
  box-shadow: 0rem 0rem 2rem ${props => {
    const toMix = props.positive ? props.theme.colors.green[100] : props.theme.colors.red[100]
    const color = mix(0.5, toMix, props.theme.colors.neutral[400])
    return props.theme.darkMode ? color : darken(0.05, color);
  }} inset;
  border: 1px solid ${props => props.theme.colors.neutral[1200]};
  background: ${props => props.theme.colors.neutral[900]};
  ${props => props.theme.isMobile && css`
    border: none;
  `}
`

const StatsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  :after{
    content:"";
    display:block;
    height:0.5rem; /* Which is the padding of div.container */
  }
  overflow-y: auto;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
  ${props => props.theme.isMobile && css`
    display: none;
  `}
`

const Value = styled.p``

export const Balance = ({ ...rest }) => {

  const {assets, total, totalBTC, change, isFetching, isEmpty} = usePortfolio()
  const {formatPrice} = useFormatPrice()
  const stats = getAssetStatistics({assets})
  const theme = useTheme()

  return (
    <StyledCard hideHeader={theme.isMobile} label="Portfolio (24H)" icon={Icon} {...rest}>
      <Wrapper>
        <Label isLoading={isFetching} positive={change['24h'].percentage >= 0}>
            <Color value={change['24h'].percentage}>
              <IndicatorArrow value={change['24h'].percentage}/>
              <IndicatorValue>{formatPercentage(change['24h'].percentage)}</IndicatorValue>
            </Color>
            <Total>{formatPrice(total)}</Total>
            <AltTotal>(<Price currency="btc">{totalBTC}</Price>)</AltTotal>
        </Label>
        {/* <StatsOverflow> */}
        <StatsWrapper>
          <StatCard 
            disabled={isEmpty}
            label="Best Performing Asset (24H)" 
            asset={stats.bestPerformingAsset} 
            value={(stats.bestPerformingAsset &&
                <IndicatorColor isPositive={stats.bestPerformingAsset.change['24h'].percentage > 0}>
                  <Value>{formatPercentage(stats.bestPerformingAsset.change['24h'].percentage)}</Value>
                </IndicatorColor>
            )}
          />
          <StatCard 
            disabled={isEmpty}
            label="Worst Performing Asset (24H)" 
            asset={stats.worstPerformingAsset} 
            value={(stats.worstPerformingAsset &&
              <IndicatorColor isPositive={stats.worstPerformingAsset.change['24h'].percentage > 0}>
                <Value>{formatPercentage(stats.worstPerformingAsset.change['24h'].percentage)}</Value>
              </IndicatorColor>
            )}
          />
          <StatCard 
            disabled={isEmpty}
            label="Highest Value Asset" 
            asset={stats.highestValueAsset} 
            value={(stats.highestValueAsset &&
              <IndicatorColor isPositive={stats.highestValueAsset.price > 0}>
                <Value>{formatPrice(stats.highestValueAsset.price)}</Value>
              </IndicatorColor>
            )}
          />
          <StatCard 
            disabled={isEmpty}
            label="Lowest Value Asset" 
            asset={stats.lowestValueAsset} 
            value={(stats.lowestValueAsset &&
              <IndicatorColor isPositive={stats.lowestValueAsset.price > 0}>
                <Value>{formatPrice(stats.lowestValueAsset.price)}</Value>
              </IndicatorColor>
            )}
          />
          <StatCard 
            disabled={isEmpty}
            label="Rarest Asset" 
            asset={stats.rarestAsset}
            value={stats.rarestAsset && <Value>N/A</Value>} 
          />
          <StatCard 
            disabled={isEmpty}
            label="Highest All Time High" 
            asset={stats.highestAllTimeHigh} 
            value={(stats.highestAllTimeHigh &&
              <IndicatorColor isPositive={true}>
                <Value>{formatPrice(stats.highestAllTimeHigh.ath)}</Value>
              </IndicatorColor>
            )}
          />
        </StatsWrapper>
        {/* </StatsOverflow> */}
      </Wrapper>
    </StyledCard>
  )
}
