import React from 'react'
import styled, {css} from 'styled-components/macro'
import {MarketBarItem} from './MarketBarItem'
import {FaGlobeAfrica as Icon} from 'react-icons/fa'
import {RiArrowRightSFill as Arrow} from 'react-icons/ri'
import {useCoinData} from '../../../hooks/api'
import {useResize} from '../../../utils'

const Wrapper = styled.div`
  /* font-size: ${(props) => props.theme.typeScale.bodySmall}; */
  display: flex;
  align-items: stretch;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[400]};
  ${props => props.theme.isMobile && css`display: none;`}
`

const PriceWrapper = styled.ul`
  padding: 0.5rem 1rem;
  overflow: hidden;
  background: ${(props) => props.theme.colors.neutral[200]};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-height: 2.25rem;
  > * {
    margin-left: 1.25rem;
    margin-bottom: 2rem;
    :first-child {
      margin-left: 0;
    }
  }
`

const TitleWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  background: ${(props) => props.theme.colors.neutral[300]};
  border-right: 1px solid ${(props) => props.theme.colors.neutral[300]};
  padding: 0rem 1rem;
  white-space: nowrap;
  align-items: center;
`

const Title = styled.p`
 
  margin-bottom: -0.2rem;
`
const TitleIcon = styled(Icon)`
 
  height: 1rem;
  width: 1rem;
`

export const MarketBar = ({ ...rest }) => {

  const {coinData, isLoading, isError, error} = useCoinData()

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Wrapper {...rest}>
      <TitleWrapper>
        <TitleIcon />
        <Title>Markets (24H)</Title>
      </TitleWrapper>

      <PriceWrapper>
        {isLoading ? <div>Loading...</div> : isError ? <div>Error: {error.message}</div> 
        : coinData.slice(0, 10).map((asset, idx) => {
          return <MarketBarItem  key={idx} {...asset} />
        })}
      </PriceWrapper>
    </Wrapper>
  )
}
