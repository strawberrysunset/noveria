import React from 'react'
import styled, {css} from 'styled-components/macro'
import {desaturate, mix} from 'polished'

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  height: 0.25rem;
`

const Segment = styled.div`
  width: ${props => props.width};
  height: 100%;
  background-color: ${props => mix(0.3, props.theme.colors.neutral[1200], props.color) || props.theme.colors.neutral[1400]};
`

export const WeightBar = ({ assets, ...rest}) => {
  return (
    <Wrapper { ...rest}>
      {assets.map(({weight, color}) => {
        return <Segment width={`${weight * 100}%`} color={color}/>
      })}
    </Wrapper>
  )
}