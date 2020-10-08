import React from 'react'
import styled from 'styled-components/macro'
import {VictoryPie, VictoryContainer, VictoryLabel} from 'victory'

export const Doughnut = ({ label, graphProps, ...rest}) => {
    return (
        <VictoryContainer { ...rest} domainPadding={0} preserveAspectRatio="none">
          <VictoryPie  
            standalone={false}
            width={400} height={400}
            innerRadius={70} labelRadius={100}
            style={{ labels: { fontSize: 20, fill: "white" } }}
            {...graphProps}
          />
        </VictoryContainer>
    )
}