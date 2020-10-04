import React from 'react'
import styled, {css} from 'styled-components/macro'
import { useGlobalData } from '../../../hooks/api'
import {Price, Percentage} from '../../common'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  max-height: 100%;
  margin-top: 0.4rem;
`
const Item = styled.li`
  color: ${props => props.theme.colors.neutral[1200]};
  font-size: ${props => props.theme.typeScale.caption};
  vertical-align: middle;
  
`

const Left = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
`

const Right = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  
`

const NavButton = styled.p`
  ${props => {
    return !props.enabled && css`
      color: ${props.theme.colors.neutral[800]};
      cursor: none;
      pointer-events: none;
    `
  }}
  :hover{
    cursor: pointer;
  }
`

export const HeaderItems = ({page, setPage}) => {

  const {isLoading, globalData} = useGlobalData()

  return React.useMemo(() => (
    <Wrapper>
      <Left>
        <Item>Assets: {isLoading ? 'Loading...' : globalData.activeCoins}</Item>
        <Item>Markets: {isLoading ? 'Loading...' : globalData.markets}</Item>
        <Item>Total Market Cap: {isLoading ? 'Loading...' : <Price>{globalData.marketCap}</Price>}</Item>
        <Item>Total Volume: {isLoading ? 'Loading...' : <Price>{globalData.volume}</Price>}</Item>
        <Item>BTC Dominance: {isLoading ? 'Loading...' : <Percentage>{ globalData.dominance['btc']}</Percentage>}</Item>
      </Left>
      <Right>
        <NavButton enabled={page > 1} onClick={()=> setPage(page - 1)}>Previous</NavButton>
        <Item css={`font-weight: bold;`}>{page}</Item>
        <NavButton enabled={page < 4} onClick={()=> setPage(page + 1)}>Next</NavButton>
      </Right>
    </Wrapper> 
  ), [globalData])
}