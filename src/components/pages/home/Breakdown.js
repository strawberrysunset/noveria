import React from 'react'
import styled from 'styled-components/macro'
import { TiChartPie as Icon } from 'react-icons/ti'
import { Card, Table } from '../../common'
import {usePortfolio} from '../../../context'
import {WeightBar} from './WeightBar'
import {Pie} from '../../common'

const Wrapper = styled(Card)`
  height: 100%;
  grid-area: breakdown;
  
  /* display: grid;
    grid-auto-flow: column;
    grid-gap: 5px; */
  /* width: 100%; */
  /* grid-template-columns: repeat(3, 1fr); */
`

const ContentWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Stats = styled.div`
  background: ${(props) => props.theme.colors.neutral[200]};
`

const ChartContainer = styled.div`
  height: 10rem;
  width: 10rem;
`

const AssetTable = styled(Table)`
  grid-template-columns: 1fr 1fr;

`
const ChartWrapper = styled.div`
  width: 200px;
`

const Weights = styled(WeightBar)`
  width: 50%;
`
const headerData = ['Asset', 'Value', 'Change 24h']

const Text = styled.p``

export const Breakdown = ({ ...rest }) => {

  const {isEmpty, assets, isLoading} = usePortfolio()

  // sort assets by biggest change
  // const rowData = assets.sort((a,b) => {
  //   return a.spotPrice.change['24h'] - b.spotPrice.change['24h']
  // })


  const biggestGainer = isLoading ? [] : assets.reduce((biggest, asset) => {
    return (asset.spotPrice.change['24h'] > biggest?.spotPrice?.change['24h']) ? asset : biggest
  }, {})

  // const largestValue = assets.reduce((biggest, asset) => {
  //   return (asset.price.value > biggest.price.value) ? asset : biggest
  // }, {})

  return (
    <Wrapper icon={Icon} loading="true" label="Markets" {...rest}>
      <ContentWrapper>
        <p>Hello!</p>
      </ContentWrapper>
    </Wrapper>
  )
}
