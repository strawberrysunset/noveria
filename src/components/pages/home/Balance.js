import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Card, Price, IndicatorColor } from '../../common'
import {MdAccountBalanceWallet as Icon, MdArrowDropUp as Arrow, MdRefresh } from 'react-icons/md'
import {motion} from 'framer-motion'
import {useSettings, usePortfolio} from '../../../context'
import {useQueryCache} from 'react-query'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
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
`
const IndicatorArrow = styled(Arrow)`
  height: 2rem;
  width: 2rem;
  transform: ${props => (props.value >= 0) ? css`rotate(0deg)` : css`rotate(180deg)`};
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

export const Balance = ({ ...rest }) => {

  const {isFetching, refetchQueries} = useQueryCache()
  const {total, totalBTC, isLoading} = usePortfolio()

  const headerItems = (
    <HeaderItemsWrapper onClick={refetchQueries}>
      <RefreshIcon spin={isFetching} size="1.25rem"/>
      <Refresh>Refresh</Refresh>
    </HeaderItemsWrapper>
  )

  return (
    <Card label="Balance" icon={Icon} items={headerItems} {...rest}>
      <Wrapper>
        <IndicatorColor value={-2}>
          <IndicatorArrow value={-1}/>
          <IndicatorValue></IndicatorValue>
        </IndicatorColor>
        <Total><Price>{isLoading ? 0 : total}</Price></Total>
        <AltTotal>(<Price currency="btc">{isLoading ? 0 : totalBTC}</Price>)</AltTotal>
      </Wrapper>
    </Card>
  )
}
