import React from "react";
import {useTheme} from '../../../context'
import {
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import { Tooltip } from "./Tooltip";
import {ResponsiveContainer} from './ResponsiveContainer'

export const Line = (props) => {

  const theme = useTheme()

  return (
    <ResponsiveContainer
      padding={0}
      domainPadding={{ x: 0, y: 0 }}
      containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryLine
        style={{
          data: {
            stroke: theme.colors.neutral[1200],
            strokeWidth: '1px',
          }
        }}
        labels={() => ""}
        labelComponent={<VictoryTooltip flyoutComponent={<Tooltip />} />}
        {...props}
      />
    </ResponsiveContainer>
  );
}   
