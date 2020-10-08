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

export const Breakdown = ({ ...rest }) => {

  const {assets, isLoading} = usePortfolio()

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
    <Wrapper icon={Icon} label="Breakdown" {...rest}>
      <ContentWrapper>
        <Weights/>
        <div>Biggest Gainer: {biggestGainer?.name}</div>
        {/* <div>Largest Value: {largestValue?.name}</div> */}
        
        {/* <AssetTable headerData={headerData} rowData={rowData}/> */}
      </ContentWrapper>
    </Wrapper>
  )
}
