import React from 'react'
import styled, {css} from 'styled-components'
import { AssetTable } from './AssetTable'
import { AssetManager } from './AssetManager'

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[300]};
  display: grid;
  grid-gap: 1px;
  background: ${props => props.theme.colors.neutral[800]};
  grid-template-columns: 1fr 2fr;
  grid-auto-flow: column;
  width: 100%;
  flex-grow: 1;
  
  ${props => props.theme.isMobile && css`
    grid-auto-flow: row;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    /* height: 100%; */
    overflow-y: auto;
  `}
`

export const Portfolio = () => {
  return (
    <Wrapper>
      <AssetManager/>
      <AssetTable css="overflow-y: auto;"/>
    </Wrapper>
  )
}
