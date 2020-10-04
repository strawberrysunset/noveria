import React from 'react'
import {VictoryPie, VictoryLabel, VictoryGroup} from 'victory'

export const Pie = ({label, ...rest }) => {
  return (
    <VictoryGroup 
        padding={0}
        domainPadding={{ x: 0, y: 0 }}
        width={400}
        height={400}
    >
      <VictoryPie
      domainPadding={{ x: 0, y: 0 }}
        standalone={false}
        width={400} height={400}
        innerRadius={68} labelRadius={100}
        style={{ labels: { fontSize: 20, fill: "white" } }}
        {...rest}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={200} y={200}
        text={label}
      />
    </VictoryGroup>
  )
}