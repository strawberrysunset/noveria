import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Card, Price, IndicatorColor, Doughnut, Spinner, OptionsBar} from '../../common'
import {MdAccountBalanceWallet as Icon, MdArrowDropUp as Arrow, MdRefresh } from 'react-icons/md'
import {motion} from 'framer-motion'
import {usePortfolio} from '../../../context'
import {useFormatPrice} from '../../../hooks/common'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 2rem 3rem;
  padding-bottom: 2.5rem; */
  height: 100%;
  width: 100%;
  padding: 1.5rem;
`

const Total = styled.p`
  font-size: clamp(${(props) => props.theme.typeScale.caption}, 12vw, ${(props) => props.theme.typeScale.h2});
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0.25rem 0;
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
        margin-bottom: 0.35rem;
      `
    }
    return css`
      transform: rotate(180deg);
      margin-bottom: 0.7rem;
    ` 
  }};

`


const HeaderItemsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  align-items: center;
  :hover {
    color: ${props => props.theme.colors.green[100]};
    cursor: pointer;
    :first-child {
      transform: rotate(45deg);
      transition: 0.3s ease;
    }
  }
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
  padding: 2rem 0;
`

export const Balance = ({ ...rest }) => {

  const {total, totalBTC, change, isLoading} = usePortfolio()
  const {formatPrice} = useFormatPrice()

  const headerItems = (
    <HeaderItemsWrapper>
      <OptionsBar options={[
        {
          value:'1H', 
          action: () => {}
        },
        {
          value:'24H', 
          action: () => {}
        },
        {
          value:'7D', 
          action: () => {}
        }
      ]}/>
    </HeaderItemsWrapper>
  )

  return (
    <Card label="Balance" loading={isLoading} icon={Icon} items={headerItems} {...rest}>
      <Wrapper>
          <Label>
            <Color value={change['24h'].percentage}>
              <IndicatorArrow value={change['24h'].percentage}/>
              <IndicatorValue>{change['24h'].percentage.toFixed(2) + '%'}</IndicatorValue>
            </Color>
            <Total>{formatPrice(total)}</Total>
            <AltTotal>(<Price currency="btc">{totalBTC}</Price>)</AltTotal>
          </Label>
      </Wrapper>
    </Card>
  )
}
