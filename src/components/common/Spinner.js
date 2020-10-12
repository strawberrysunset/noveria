import React from 'react'
import styled from 'styled-components'
import {useTheme} from '../../context'
import {InfiniteSpin} from '../animators'

const SVG = styled.svg`
  width: 3rem;
  height: 3rem;
  transform-box: fill-box;
  transform-origin: center;
`

const Ring = styled.circle``

const Segment = styled.circle``

export const Spinner = ({ circleColor, segmentColor, ...rest}) => {
    const theme = useTheme()
    return (
      <InfiniteSpin duration={0.7} offset={170} >
          <SVG viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/>
            </filter>
          </defs>
          <Ring
              stroke={circleColor || theme.colors.neutral[600]}
              strokeWidth="5%"
              fill="transparent"
              cx="10"
              cy="10"
              r="9"
            />
            <Segment
              stroke={segmentColor || theme.colors.neutral[1200]}
              strokeWidth="8%"
              fill="transparent"
              cx="10"
              cy="10"
              r="9"
              strokeDasharray="40 70"
              strokeDashoffset="0"
            />
      </SVG>
    </InfiniteSpin>
    )
}

