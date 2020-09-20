import React from 'react'
import styled from 'styled-components'
import { CoinTable } from './CoinTable'
import { CoinManager } from './CoinManager'

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[300]};
  display: grid;
  grid-gap: 1px;

  @media (min-width: 48rem) {
    grid-template-columns: 1fr minmax(0, 2fr);
    grid-gap: 1px;
    height: 100%;
    width: 100%;
  }
`

export const Portfolio = () => {
  return (
    <Wrapper>
      <CoinManager/>
      <CoinTable/>
    </Wrapper>
  )
}
