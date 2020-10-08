import React from "react";
import {useTheme} from '../../../context'
import {
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryContainer,
  VictoryGroup,
  VictoryChart
} from "victory";
import { Tooltip } from "./Tooltip";
// import {ResponsiveContainer} from './ResponsiveContainer'
import {useResize} from '../../../utils'

export const Line = ({lineProps, showLabels = false, color, ...rest}) => {

  const theme = useTheme()
  const componentRef = React.useRef();
  const {width, height} = useResize(componentRef)

  const labelProps = showLabels ? {
    labels: () => "",
    labelComponent : <VictoryTooltip flyoutComponent={<Tooltip />}/>
  } : []

  return (
    <VictoryGroup
      padding={0}
      ref={componentRef}
      domainPadding={{ x: 0, y: 0 }}
      containerComponent={showLabels ? <VictoryVoronoiContainer/> : <VictoryGroup/>}
      {...rest}
    >
      <VictoryLine
        style={{
          data: {
            stroke: color || theme.colors.neutral[800],
            strokeWidth: '2px', 
          }
        }}
        width={width}
        height={height}
        {...labelProps}
        {...lineProps}
      />
    </VictoryGroup>
  )
}   
