import React from 'react'
import styled from 'styled-components/macro'
import { MarketBarItem } from './MarketBarItem'
import { useAPI } from '../../../context'
import { FaGlobeAfrica as Icon } from 'react-icons/fa'
import { RiArrowRightSFill as Arrow } from 'react-icons/ri'

const Wrapper = styled.li`
  font-size: ${(props) => props.theme.typeScale.bodySmall};
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[400]};

  @media (max-width: 54rem) {
    display: none;
  }
`

const PriceWrapper = styled.div`
  padding: 0.75rem 1rem;
  overflow: hidden;
  background: ${(props) => props.theme.colors.neutral[200]};
  display: flex;
  flex-wrap: wrap;
  height: 2.5rem;
  > * {
    margin-left: 1.75rem;
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
  padding: 0.75rem 1rem;
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

  const [{data}] = useAPI()

  return (
    <Wrapper {...rest}>
      <TitleWrapper>
        <TitleIcon />
        <Title>Markets (24H)</Title>
      </TitleWrapper>
      <PriceWrapper>
        {data.coinList.slice(0, 8).map((coin) => {
          return <MarketBarItem {...coin} />
        })}
      </PriceWrapper>
    </Wrapper>
  )
}
