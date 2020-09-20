import React from 'react'
import styled from 'styled-components/macro'
import { TiChartPie as Icon } from 'react-icons/ti'
import { VictoryPie } from 'victory'
import { Card } from '../../common'
import {WeightBar} from './WeightBar'

const Wrapper = styled(Card)`
height: 100%;
grid-area: breakdown;
  /* display: grid;
    grid-auto-flow: column;
    grid-gap: 5px; */
  /* width: 100%; */
  /* grid-template-columns: repeat(3, 1fr); */
`

const Stats = styled.div`
  background: ${(props) => props.theme.colors.neutral[200]};
`

const ChartContainer = styled.div`
  height: 10rem;
  width: 10rem;
`

export const Breakdown = ({ ...rest }) => {
  return (
    <Wrapper icon={Icon} label="Breakdown" {...rest}>
      <WeightBar/>
      <ChartContainer>
        <VictoryPie tedata={[1, 2, 3]} />
      </ChartContainer>
    </Wrapper>
  )
}
