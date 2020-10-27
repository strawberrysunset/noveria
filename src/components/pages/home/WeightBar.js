import React from 'react'
import styled, {css} from 'styled-components/macro'
import { usePortfolio } from '../../../hooks/portfolio'

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  height: 0.5rem;
`

const Segment = styled.div`
  background-color: ${props => props.theme.colors.neutral[1600]};
  width: ${props => props.width};
  height: 100%;
`

export const WeightBar = ({ ...rest}) => {

  const {assets} = usePortfolio()

  return (
    <Wrapper { ...rest}>
      {assets.map(({weight, color}) => {
        return <Segment width={String(weight * 100) + '%'} color={color}/>
      })}
    </Wrapper>
  )
}