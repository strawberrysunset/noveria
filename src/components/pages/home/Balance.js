import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Card, Currency, IndicatorColor } from '../../common'
import { usePortfolio } from '../../../context'
import { MdAccountBalanceWallet as Icon, MdArrowDropUp as Arrow } from 'react-icons/md'
import { IoMdRefreshCircle } from 'react-icons/io'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
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
const Color = styled(IndicatorColor)`
  display: flex;
  align-items: center;
`

const HeaderItemsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  align-items: center;
`

const Refresh = styled.p`
  :hover {
    color: ${props => props.theme.colors.green[100]}
  }
`

const headerItems = (
  <HeaderItemsWrapper>
    <IoMdRefreshCircle size="1.25rem"/>
    <Refresh>Refresh</Refresh>
  </HeaderItemsWrapper>
)

export const Balance = ({ ...rest }) => {

  const [{total}, dispatch] = usePortfolio()

  return (
    <Card label="Balance" icon={Icon} items={headerItems} {...rest}>
      <Wrapper>
        <Color value={-1.56}>
          <IndicatorArrow value={-1.56}/>
          <IndicatorValue>-1.56%</IndicatorValue>
        </Color>
        <Total><Currency>{total}</Currency></Total>
        <AltTotal>({total} BTC)</AltTotal>
      </Wrapper>
    </Card>
  )
}
