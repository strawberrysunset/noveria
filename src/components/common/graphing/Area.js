import React from "react";
import styled from 'styled-components'
import {
  VictoryChart,
  VictoryArea,
  VictoryStack,
  VictoryTheme
} from "victory"

const Container = styled.div`

`

export const Area = ({data, ...rest}) => {

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
      >
        <VictoryStack
          colorScale={"blue"}
        >
          {data.map((data, i) => {
            return (
              <VictoryArea
                key={i}
                data={data}
                x={0}
                y={1}
                interpolation={"basis"}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    );
  
}