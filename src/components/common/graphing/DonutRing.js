import React from 'react'
import styled, {css} from 'styled-components/macro'
import { lighten, mix } from 'polished'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SVG = styled.svg`
  transform-box: fill-box;
  transform-origin: center;
`

const Ring = styled.circle`
  fill: transparent;
  stroke: ${props => props.theme.colors.neutral[1100]};
  box-shadow: 2rem 2rem 2rem #fff;
`

const Segment = styled(Ring)` 
  stroke: ${props => mix(0.4, props.theme.colors.neutral[1200], props.color)};
  fill: transparent;
  :hover {
    stroke: ${props =>  lighten(0.1, props.color)};
    transition: 0.2s;
  }
`

export const DonutRing = ({ data, innerStroke = 1.5, outerStroke = 3, ...rest}) => {

  const circumferece = 100 
  const width = (circumferece / Math.PI) 
  const height = width
  const cx = width / 2
  const radius = cx - outerStroke

  const circleProps = {
    cx,
    cy: cx,
    r: radius
  }

  let totalLength = 0;
  const Segments = data.map((item, idx) => {
    const weight = 100 * item.weight
    const dashArray = `${weight} ${100 - weight}`
    const component = (
      <Segment
        {...circleProps}
        color={item.color || "#ccc"}
        strokeWidth={innerStroke}
        strokeDasharray={dashArray}
        strokeDashoffset={-((idx !== 0) && totalLength)}
      />
    )
    totalLength += weight
    return component
  })

  return (
    <Wrapper { ...rest}>
      <SVG viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        <Ring
          {...circleProps}
          strokeWidth={outerStroke}
        />
        {Segments}
      </SVG>
    </Wrapper>
  )
}