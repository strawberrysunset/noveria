import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Card, Price, IndicatorColor, Doughnut, Spinner} from '../../common'
import {MdAccountBalanceWallet as Icon, MdArrowDropUp as Arrow, MdRefresh } from 'react-icons/md'
import {motion} from 'framer-motion'
import {useSettings, usePortfolio} from '../../../context'
import {useQueryCache} from 'react-query'
import {useFormatPrice} from '../../../hooks/common'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  padding-bottom: 5rem;
  height: 100%;
`

const Total = styled.p`
  font-size: ${(props) => props.theme.typeScale.h2};
  font-weight: 900;
  letter-spacing: -0.02em;
`

const AltTotal = styled.div`
  font-size: ${(props) => props.theme.typeScale.bodySmall};
  color: ${(props) => props.theme.colors.neutral[1000]};
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
        margin-bottom: 0.5rem;
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

const RefreshIcon = ({spin}) => {
  return (
    <>
    {spin 
    ?
    <motion.div 
      initial={{ rotate: '0deg' }}
      animate={{ rotate: '360deg' }}
      transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}>
        <MdRefresh size="1.25rem"/>
    </motion.div>
    : <MdRefresh size="1.25rem"/>
    }
    </>
  )
}

const Refresh = styled.p`
  margin-top: 0.25rem;
`

const Color = styled(IndicatorColor)`
  display: flex;
  align-items: center;
  margin-bottom: -1rem;
`


const Ring = styled(Doughnut)`
  position: relative;
`
const Label = styled.div`
  top: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Balance = ({ ...rest }) => {

  const {total, totalBTC, change, isLoading, refresh} = usePortfolio()
  const {formatPrice} = useFormatPrice()

  const headerItems = (
    <HeaderItemsWrapper onClick={refresh}>
      <RefreshIcon size="1.25rem"/>
      <Refresh>Refresh</Refresh>
    </HeaderItemsWrapper>
  )

  return (
    <Card label="Balance" icon={Icon} items={headerItems} {...rest}>
      <Wrapper>
        {/* <Ring data={[ {x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }]}> */}
          <Label>
            {isLoading ? null : <Color value={change['24h'].percentage}>
              <IndicatorArrow value={change['24h'].percentage}/>
              <IndicatorValue>{change['24h'].percentage.toFixed(2) + '%'}</IndicatorValue>
            </Color>
            }
            <Spinner/>
            <Total>{isLoading ? 0 : formatPrice(total)}</Total>
            <AltTotal>(<Price currency="btc">{isLoading ? 0 : totalBTC}</Price>)</AltTotal>
          </Label>
        {/* </Ring> */}
        
      </Wrapper>
    </Card>
  )
}
