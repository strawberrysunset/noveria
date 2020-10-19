import React from "react";
import styled from 'styled-components'
import {useTheme} from '../../../context'
import {
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryContainer,
} from "victory";
import { Tooltip } from "./Tooltip";
import {useResize} from '../../../utils'


const Container = styled.div`

`

export const Line = ({lineProps, showLabels = false, color, ...rest}) => {

  const theme = useTheme()
  const componentRef = React.useRef();
  const {width, height} = useResize(componentRef)

  const labelProps = showLabels ? {
    labels: () => "",
    labelComponent : <VictoryTooltip flyoutComponent={<Tooltip />}/>
  } : []

  return (
    <Container ref={componentRef} {...rest}>
      <VictoryGroup
        padding={0}
        width={width}
        height={height}
        domainPadding={{ x: 0, y: 0 }}
        containerComponent={showLabels ? <VictoryVoronoiContainer/> : <VictoryContainer/>}
      >
        <VictoryLine
          style={{
            data: {
              stroke: color || theme.colors.neutral[1400],
              strokeWidth: '2px', 
            }
          }}
          width={width}
          height={height}
          {...labelProps}
          {...lineProps}
        />
      </VictoryGroup>
    </Container>
  )
}   
