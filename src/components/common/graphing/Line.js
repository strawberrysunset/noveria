import React from "react";
import styled from "styled-components";
import {useTheme} from '../../../context'

import {
  VictoryLine,
  VictoryChart,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryGroup
} from "victory";

import { Tooltip } from "./Tooltip";

const Wrapper = styled.div``

const lineProps = {
  interpolation: 'natural',
  padding: 0,
  height: 100,
  width: 100
}

export const Line = ({ ...props }) => {

  const theme = useTheme()

  const style = {
    data: {
      stroke: theme.colors.neutral[1600],
      strokeWidth: '2px',
    }
  }

  return (
    <Wrapper>
      <VictoryGroup
        padding={0}
        // domainPadding={{ y: 10, x: 10 }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryLine
          {...lineProps}
          style={style}
          labels={() => ""}
          labelComponent={<VictoryTooltip flyoutComponent={<Tooltip />} />}
          {...props}
          x={0}
          y={1}
        />
      </VictoryGroup>
    </Wrapper>
  );
}
