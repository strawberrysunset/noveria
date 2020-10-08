import React from 'react'
import styled, {keyframes} from 'styled-components'
import {useTheme} from '../../context'
import {InfiniteSpin} from '../animators'

const Wrapper = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
`

// const InfiniteSpin = keyframes`
//   from {
//     transform: rotate(220deg);
//     }
//     to {
//       transform: rotate(580deg);
//     }



export const Spinner = ({ circleColor, segmentColor, ...rest}) => {
    const theme = useTheme()
    return (
      <InfiniteSpin duration={0.7} offset={170}>
        <Wrapper viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <circle
            stroke={circleColor || theme.colors.neutral[400]}
            stroke-width="1"
            fill="transparent"
            cx="10"
            cy="10"
            r="9"
          />
          <circle
            stroke={segmentColor || theme.colors.neutral[1200]}
            stroke-width="1.4"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center" 
            }}
            fill="transparent"
            cx="10"
            cy="10"
            r="9"
            stroke-dasharray="30 70"
            stroke-dashoffset="0"
          />
      </Wrapper>
    </InfiniteSpin>
    )
}