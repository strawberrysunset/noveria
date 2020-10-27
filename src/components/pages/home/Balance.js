import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Card, Price, IndicatorColor} from '../../common'
import {MdAccountBalanceWallet as Icon, MdArrowDropUp as Arrow, MdRefresh } from 'react-icons/md'
import {motion} from 'framer-motion'
import {usePortfolio} from '../../../context'
import {useFormatPrice} from '../../../hooks/common'
import {transparentize} from 'polished'
import { useQueryCache } from 'react-query'
import {BiUpArrow} from 'react-icons/bi'
import {formatPercentage} from 'utilities'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  background-color: ${props => props.theme.colors.neutral[400]};
`

const Total = styled(motion.p)`
  font-size: clamp(${(props) => props.theme.typeScale.caption}, 12vw, ${(props) => props.theme.typeScale.h2});
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
  font-weight: 600;
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
`

const Label = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
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

const priceChangePeriods = ['1H', '24H', '7D', '30D'];

export const Balance = ({ ...rest }) => {

  const {total, totalBTC, change, isLoading, isFetching} = usePortfolio()
  const {formatPrice} = useFormatPrice()
  const queryCache = useQueryCache()


  // const headerItems = (
  //   <button onClick={() => {
  //     queryCache.refetchQueries()
  //   }}>Refresh</button>
  // )


  return (
    <Card label="Balance (24H)" isLoading={isFetching} icon={Icon} {...rest}>
      <Wrapper>
          <Label>
            <Color value={change['24h'].percentage}>
              <IndicatorArrow value={change['24h'].percentage}/>
              <IndicatorValue>{formatPercentage(change['24h'].percentage)}</IndicatorValue>
            </Color>
            <Total>{formatPrice(total)}</Total>
            <AltTotal>(<Price currency="btc">{totalBTC}</Price>)</AltTotal>
          </Label>
      </Wrapper>
    </Card>
  )
}
